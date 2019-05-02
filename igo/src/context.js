import React, { Component } from 'react'
import FeedData from "./FeedData"

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        feedData: FeedData,
        valueDictionary: "Search a word",
        langDictionary: "0"
    }

    increaseLikes = (idSearch) => {
        let feedData = this.state.feedData;
        let activity = this.state.feedData.find(item => item.id === idSearch);
        activity.likes = activity.likes + 1;
        activity.liked = true;
        
        feedData[idSearch - 1] = activity;
        this.setState({
            feedData: feedData
        })
    }

    decreaseLikes = (idSearch) => {
        let feedData = this.state.feedData;
        let activity = this.state.feedData.find(item => item.id === idSearch);
        activity.likes = activity.likes - 1;
        activity.liked = false;
        
        feedData[idSearch - 1] = activity;
        this.setState({
            feedData: feedData
        })
    }

    updateValueDictionary = (newValue) => {
        this.setState({
            valueDictionary: newValue
        })
    }

    changeLangDictionary = (newLang) => {
        this.setState({
            langDictionary: newLang
        })
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                increaseLikes: this.increaseLikes,
                decreaseLikes: this.decreaseLikes,
                updateValueDictionary: this.updateValueDictionary,
                changeLangDictionary: this.changeLangDictionary
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer }
