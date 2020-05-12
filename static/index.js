// var data =
firebase.database().ref("/Data").on('value', function(snapshot){
   var data = snapshot.val();
   console.log(data);

   var labels = new Array();
   var values = new Array();

   for(id in data){
     // console.log(data[id]["time-stamp"]);
     // console.log(data[id]["value"]);
     labels.push(data[id]["time-stamp"]);
     values.push(data[id]["value"]);
   }

   console.log(labels);
   console.log(values);

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            // labels: ['10:00', '11:00', '11:30', '12:45', '2:00', '5:00', '6:15'],
            labels: labels,
            datasets: [{
                // label: 'Sound Level vs Time Graph',
                // backgroundColor: 'rgb(255, 0, 0)',
                borderColor: '#3ca5ff',
                borderDash: [10,5],
                fill:false,
                data: values
                // data: [2, 10, 5, 2, 20, 25, 10]
            }]
        },

        // Configuration options go here
        options: {
          legend:{
            display: false
          },
          scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'dB Value',
                  fontSize:20
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Time',
                  fontSize:20
                }
              }]
            }
          }

    });

});