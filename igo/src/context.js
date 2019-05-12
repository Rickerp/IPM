import React, { Component } from 'react'
import FeedData from "./FeedData"
import UsersData from "./UsersData"

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        feedData: FeedData,
        valueDictionary: "Search a word",
        langDictionary: "0",
        usersData: UsersData
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

    removeFriend = (idSearch, userId) => {
        let usersData = this.state.usersData;
        let feedData = this.state.feedData;
        let user = this.state.usersData.find(user => user.id === idSearch);
        let activity = this.state.feedData.find(activity => activity.userId === userId);
        user.added = false;
        activity.display = false;
        
        usersData[idSearch - 1] = user;
        feedData[activity.id - 1] = activity;
        this.setState({
            feedData: feedData,
            usersData: usersData
        })
    }

    addFriend = (idSearch, userId) => {
        let usersData = this.state.usersData;
        let feedData = this.state.feedData;
        let user = this.state.usersData.find(item => item.id === idSearch);
        let activity = this.state.feedData.find(activity => activity.userId === userId);
        user.added = true;
        activity.display = true;
        
        usersData[idSearch - 1] = user;
        feedData[activity.id - 1] = activity;
        this.setState({
            feedData: feedData,
            usersData: usersData
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
                removeFriend: this.removeFriend,
                addFriend: this.addFriend,
                updateValueDictionary: this.updateValueDictionary,
                changeLangDictionary: this.changeLangDictionary
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext }
