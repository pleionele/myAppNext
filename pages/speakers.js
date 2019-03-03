import React from 'react';

import DigitalClock from "../src/DigitalClock";
import axios from "axios";
import Link from "next/link";
import SpeakerCard from "../src/SpeakerCard";


import getConfig from "next/config";

const {serverRuntimeConfig , publicRuntimeConfig} = getConfig();
class Speakers extends React.Component{
    static getSpeakerUrl() {
        
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SPEAKERS_PROD || 
            publicRuntimeConfig.RESTURL_SPEAKERS_PROD;
        } else {
            return process.env.RESTURL_SPEAKERS_DEV;
        }
    }

    // next runs the getinitialprops before it calls the constructor
    static async getInitialProps() {
        // return ({
        //     time: new Date().toISOString()
        // });

        // const newPromise = new Promise((resolve,reject) => {
        //     setInterval(
        //         () => resolve({
        //             time: new Date().toISOString()
        //         }),3000
        //     );
        // });
        // return newPromise;

        const response = axios.get(Speakers.getSpeakerUrl())
            .then(
                (response) => {
                    console.log(response)
                    return {
                        hasErrored: false,
                        speakerData: response.data,
                    };
                }
        ).catch(
            error => {
                return {
                    hasErrored: true,
                    message:error.message,
                }
            }
        );
        return response;
 }
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            speakerData: props.speakerData,
          //  time: props.time,
        };
    }

    componentDidMount() {
    //    this.interval= setInterval(() => {
    //         this.tick();
    //     }, 1000);
     }
    // tick() {
    //     this.setState({
    //         time: new Date().toISOString()
    //     });
    // }

    render() {
       //return React.createElement("h1", { }, "Hello from the function side" + this.state.time);
        // return <h1>Hello from the function side!!!: {this.state.time}</h1>;
       // return <DigitalClock time={this.state.time}></DigitalClock>
        return (
            // <React.Fragment>
            //     <Link href="/sessions">
            //         <a>Sessions</a>
            //     </Link>

            //     <ul>
            //         {
            //         this.state.speakerData.map(
            //             (speaker) => {
            //                 return (
            //                     <li key={speaker.id}>
            //                     {speaker.firstName} {speaker.lastName}
            //                 </li>)
            //             })
            //         }
            //     </ul>
            // </React.Fragment> 

            <div className="container">
            <div className="row">
                <div className="card-deck">
                    {this.state.speakerData.map((speaker) =>
                        <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
                            <SpeakerCard speaker={speaker}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
        );
    }

    compentWillUnMount() {
       // clearInterval(this.interval)
    }
}

export default Speakers;