/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};*/

function init() {
    document.addEventListener("deviceready", initParseNotification, true);
}

function initParseNotification(argument) {
    var parsedData = JSON.parse(JSON.stringify(argument));
    insertMessage(parsedData.status.toLowerCase(), parsedData.time, parsedData.msg);
}

function insertMessage(status, hour, message)
{
    var element = document.getElementsByClassName('message-list')[0];
    if(element){
        element.insertBefore(createMsgElement(status, hour, message), element.firstChild);
    }
}

function createMsgElement(status, hour, message)
{
    var divMessage = document.createElement("div");
    divMessage.className = "message";
    divMessage.appendChild(createSpan("time", hour));
    divMessage.appendChild(createSpan("title " + status, message));
    return divMessage;   
}

function createSpan(class_name, text)
{
    var span = document.createElement("span");
    span.className = class_name;
    span.appendChild(document.createTextNode(text));
    return span;
}
