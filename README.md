# Getting Started with Expense Tracker App

This project has been deployed over this URL: (https://my-expense-tracker-speechly.netlify.app/)

## About this

Expense Tracker Application is an application that helps to keep an accurate record of your money inflow and outflow. Many people in India live on a fixed income, and they find that towards the end of the month they don't have sufficient money to meet their needs.

Expense Tracker Application stores your income and expense data very efficiently in a form of a Dynamic Chart that allows you to compare or find out what all income or expenses are the most at present. According to your need, you can select or deselect which transactions you have to show over or not.

### What All It Involves?

The Application is built upon various Javascript and React js concepts such as:

- State Management using React Context APIs.
- Saving Data into Local Storage.
- Creatung a User Internface using Material UI.
- Scalable React folder structure.
- Adding voice capability using Speechly API.

### `Speechly`

Speechly is a developer tool that can be used to create real-time voice user interfaces to any application on any platform. Speechly is fast, smart and easy to deploy for developers and its models are easy to train and modify to specific use cases.
It's a set of tools and APIs that enable developers to build voice-enabled user interfaces to their apps and services on any platform.

### Quick Demo of Whole Project
 
The main goal of the applicaion is to track your income and expenses, so that you alway know on which items you are seding most koney and which things bring you the most money.

A very promising feature of the application is its voice recognition feature that enables us to track our transactions just by saying it. 
Suppose I say: "ADD INCOME FOR ONE HUNDERED DOLLARS IN CATEGORY DEPOSITS FOR NEXT MONDAY",

As soon as I say this, the tracker is automaticaly going to type the category, the amount and also choose the specific date that you have referenced to it.
The income chart would get updates in Real-Time and our transaction is added to transaction history. 

Ofcourse we can also add these transactions manually too.

Another thing noticeable is that I dont have to be really specific or detailed about the date I am talking about, I just say "NEXT THRUSDAY" and the tracker automatically sets the date for me.

### `Local Storage`

LocalStorage is a web storage object that allows JavaScript sites and apps to keep key-value pairs in a web browser with no expiration date. In basic terms, local storage enables developers to store and retrieve data in the browser.

The application uses the concept of Local Storage. More specifically even if we close the tab or the browser window, next time when I visit the application, all the data is going to be preserved there as it is.
