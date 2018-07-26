import React from 'react';

class Stream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.reactToTrack = this.reactToTrack.bind(this);
    }

    reactToTrack(key) {
        this.setState((previousState) => {
            return { [key]: !previousState[key]}
        });
    }

    render() {
        // Destructuring
        const { tracks = [] } = this.props;
        return (
            <div>
                {
                    tracks.map((t, k) => {
                        return (
                            <div className="track" key={k}>
                                {t.title}
                                <button onClick={() => this.reactToTrack(k)} type="button">
                                    { this.state[k] ? 'Dislike' : 'Like' }
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Stream;