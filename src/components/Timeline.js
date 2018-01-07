import React from 'react'
import store from '../store'

var pixelsPerSec = 200
var previous_chords = ''
export default class Timeline extends React.Component {


    constructor() {
        super()
        this.lastActiveChord = null
        this.chordsElements = []
        this.style = {
            right: '0px'
        }
        this.chordSum = 0
        
    }

    componentDidMount() {
        this.props.songdata.song.song_events.map((item) => {
            //console.log(i.name)
            this.addChord(item)
        })

    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.songdata.song.id != nextProps.songdata.song.id) {
            this.chordsElements = []
            nextProps.songdata.song.song_events.map((item) => {
                //console.log(i.name)
                this.addChord(item)
                this.chordSum += item.duration
            })
        }
        if (nextProps.currentTime > 0) {
            this.moveTimeline(nextProps.currentTime)
        }


    }

    addChord(songEvent) {

        let ref = 'chord' + this.chordsElements.length
        this.chordsElements.push(
            {
                ...songEvent,
                style: {
                    width: (songEvent.duration * pixelsPerSec) + 'px'
                }
            }
        )
        return ref

    }

    searchChord(currentTime) {
        var low = 0
        var high = this.props.songdata.song.song_events.length - 1
        var mid, el
        while (low <= high) {
            mid = Math.floor((high + low) / 2, 10)
            el = this.props.songdata.song.song_events[mid]
            if (el.beat_time + el.duration < currentTime) {
                low = mid + 1
            } else if (el.beat_time > currentTime) {
                high = mid - 1
            } else {
                return mid
            }
        }
        return -1
    }

    computeChordsBarPosition(chord, time) {

        let songdiv_width = document.defaultView.getComputedStyle(this.refs.timeline, null).width.split('px')[0];
        let chord_width = chord.duration * pixelsPerSec
        let speed = (songdiv_width / this.chordSum)

        //let speed = (chord_width / chord.duration)
        // duration : (window.innerWidth / 2) = time : X

        let chordPosition = chord.DOMelement.offsetLeft
        let offsetLeft = -songdiv_width + window.innerWidth / 2 + chordPosition
        return offsetLeft + (speed * (time - chord.beat_time)) + 'px'
    }


    moveTimeline(time) {
        // console.log(this.chordSum, this.props.song_duration);

        //console.log(this.chordsElements[this.searchChord(time)]);

        let perc = (time * 100 / this.props.song_duration)
        //console.log(offset)
        let chordIndex = this.searchChord(time)
        let chord = this.chordsElements[chordIndex]
        if (chord === -1) {
            return
        }

        if (this.lastActiveChord != null) {
            this.lastActiveChord.style.opacity = .6
        }
        if (chord.DOMelement != -1) {
            chord.DOMelement.style.opacity = 1
            this.lastActiveChord = chord.DOMelement
        }
        //console.log(this.refs[chord].DOMelement.offsetLeft)
        this.style = {
            right: this.computeChordsBarPosition(chord, time)
        }

        this.refs.timeline.style.right = this.computeChordsBarPosition(chord, time)
        let current_chords = this.getThreeChords(chordIndex)
        if (current_chords.join('') !== previous_chords) {
            store.dispatch(
                {
                    type: "CURRENT_CHORDS",
                    payload: current_chords
                }
            )
            previous_chords = current_chords.join('')
        } 

    }

    getThreeChords(currentIndex) {
        let chords = ['', '', '']
        if (currentIndex === 0) {
            chords[1] = this.chordsElements[currentIndex].name
            chords[2] = this.chordsElements[currentIndex + 1].name
            return chords
        }
        if (currentIndex === this.chordsElements.length - 1) {
            chords[0] = this.chordsElements[currentIndex - 1].name
            chords[1] = this.chordsElements[currentIndex].name
            return chords
        }
        chords[0] = this.chordsElements[currentIndex - 1].name
        chords[1] = this.chordsElements[currentIndex].name
        chords[2] = this.chordsElements[currentIndex + 1].name
        return chords
    }

    render() {

        return (
            <div className="chords" ref="timeline" style={this.style}>
                {this.chordsElements.map(
                    (chord, i) => {
                        return <div className="chord" key={i} ref={(el) => { this.chordsElements[i].DOMelement = el }} style={chord.style}>{chord.name}</div>
                    }
                )}
            </div>
        )



    }
}