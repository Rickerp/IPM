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
        let activities = this.state.feedData.filter(activity => activity.userId === userId);
        let newActivity;
        user.added = false;
        
        usersData[idSearch - 1] = user;
        activities.forEach(activity => {
            newActivity = activity;
            newActivity.display = false;
            feedData[newActivity.id - 1] = newActivity;
        });
        this.setState({
            feedData: feedData,
            usersData: usersData
        })
    }

    addFriend = (idSearch, userId) => {
        let usersData = this.state.usersData;
        let feedData = this.state.feedData;
        let user = this.state.usersData.find(item => item.id === idSearch);
        let activities = this.state.feedData.filter(activity => activity.userId === userId);
        let newActivity;
        user.added = true;
        
        usersData[idSearch - 1] = user;
        activities.forEach(activity => {
            newActivity = activity;
            newActivity.display = true;
            feedData[newActivity.id - 1] = newActivity;
        });
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
