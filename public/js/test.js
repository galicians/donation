


 
angular.module('donation').controller('chatSocket',function($scope) {
    var socket = io();
    
     $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
    });

    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });
})