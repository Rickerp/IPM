import React, { Component } from "react";
import FeedData from "./FeedData";
import UsersData from "./UsersData";
import LocationsData from "./LocationsData";
import RoutesInfo from "./RoutesInfo";
import MyRoutesData from "./MyRoutesData";
import PopularRoutesData from "./PopularRoutesData";
import FriendsRoutesData from "./FriendsRoutesData";

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        feedData: FeedData,
        usersData: UsersData,
        locationsData: LocationsData,
        routesData: RoutesInfo,
        popularRoutesData: PopularRoutesData,
        friendsRoutesData: FriendsRoutesData,
        myRoutesData: MyRoutesData,
        valueDictionary: "Search a word",
        langDictionary: "0",
        blind: false,
        location: "Rome",
        counter: 0,
        currentRoute: 0
    };

    increaseCounter = () => {
        let counter = this.state.counter
        counter++

        this.setState({
            counter: counter
        });
    }

    increaseLikes = idSearch => {
        let feedData = this.state.feedData;
        let activity = this.state.feedData.find(item => item.id === idSearch);
        activity.likes = activity.likes + 1;
        activity.liked = true;

        feedData[idSearch - 1] = activity;
        this.setState({
            feedData: feedData
        });
    };

    decreaseLikes = idSearch => {
        let feedData = this.state.feedData;
        let activity = this.state.feedData.find(item => item.id === idSearch);
        activity.likes = activity.likes - 1;
        activity.liked = false;

        feedData[idSearch - 1] = activity;
        this.setState({
            feedData: feedData
        });
    };

    removeFriend = (idSearch, userId) => {
        let usersData = this.state.usersData;
        let feedData = this.state.feedData;
        let user = this.state.usersData.find(user => user.id === idSearch);
        let activities = this.state.feedData.filter(
            activity => activity.userId === userId
        );
        let newActivity;
        user.added = false;
        user.description = "";

        usersData[idSearch - 1] = user;
        activities.forEach(activity => {
            newActivity = activity;
            newActivity.display = false;
            feedData[newActivity.id - 1] = newActivity;
        });
        this.setState({
            feedData: feedData,
            usersData: usersData
        });
    };

    addFriend = (idSearch, userId, desc) => {
        let usersData = this.state.usersData;
        let feedData = this.state.feedData;
        let user = this.state.usersData.find(item => item.id === idSearch);
        let activities = this.state.feedData.filter(
            activity => activity.userId === userId
        );
        let newActivity;
        user.added = true;
        user.description = desc;

        usersData[idSearch - 1] = user;
        activities.forEach(activity => {
            newActivity = activity;
            newActivity.display = true;
            feedData[newActivity.id - 1] = newActivity;
        });
        this.setState({
            feedData: feedData,
            usersData: usersData
        });
    };

    changeDescription = (id, desc) => {
        let usersData = this.state.usersData;
        let user = this.state.usersData.find(item => item.id === id);

        user.description = desc;
        usersData[id - 1] = user;

        this.setState({
            usersData: usersData
        });
    };

    updateValueDictionary = newValue => {
        this.setState({
            valueDictionary: newValue
        });
    };

    changeLangDictionary = newLang => {
        this.setState({
            langDictionary: newLang
        });
    };

    toggleBlind = () => {
        this.setState({
            blind: !this.state.blind
        });
    };

    changeRoute = () => {
        let routes = this.state.routesData.find(
            activity => activity.city === this.state.location
        );

        this.setState({
            currentRoute:
                routes.routes[Math.floor(Math.random() * routes.routes.length)]
        });
    };

    changeLocation = newLocation => {
        console.log(newLocation);
        this.setState({
            location: newLocation,
            currentRoute: 0
        });
    };

    getProfileBg = userId => {
        let user = this.state.usersData.find(item => item.userId === userId);

        return user.banner;
    };

    getStatus = userId => {
        let user = this.state.usersData.find(item => item.userId === userId);

        return user.online;
    };

    getDescription = userId => {
        let user = this.state.usersData.find(item => item.userId === userId);

        return user.description;
    };

    saveRoute = (route, routeName) => {
        let myRoutesData = this.state.myRoutesData;
        let routeCapitalized = routeName;
        let newRoute = {
            id: myRoutesData[myRoutesData.length - 1].id + 1,
            userId: 0,
            avatar: "img/Rita60.png",
            name: "Rita",
            lenght: Math.floor(Math.random() * 20),
            routeName:
                routeCapitalized.charAt(0).toUpperCase() +
                routeCapitalized.slice(1).toLowerCase(),
            route: route
        };

        myRoutesData.push(newRoute);
        this.setState({
            myRoutesData: myRoutesData
        });
    };

    isAdded = userId => {
        if (userId === 0) {
            return false;
        }
        let user = this.state.usersData.find(item => item.userId === userId);

        return user.added;
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    increaseLikes: this.increaseLikes,
                    decreaseLikes: this.decreaseLikes,
                    removeFriend: this.removeFriend,
                    addFriend: this.addFriend,
                    updateValueDictionary: this.updateValueDictionary,
                    changeLangDictionary: this.changeLangDictionary,
                    getProfileBg: this.getProfileBg,
                    getStatus: this.getStatus,
                    getDescription: this.getDescription,
                    toggleBlind: this.toggleBlind,
                    changeRoute: this.changeRoute,
                    changeLocation: this.changeLocation,
                    changeDescription: this.changeDescription,
                    saveRoute: this.saveRoute,
                    isAdded: this.isAdded,
                    increaseCounter: this.increaseCounter
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
