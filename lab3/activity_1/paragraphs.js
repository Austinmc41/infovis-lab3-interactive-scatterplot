
// **** Your JavaScript code goes here ****
d3.csv('baseball_hr_leaders_2017.csv').then(function(dataset){
    console.log(dataset[0]);
    // code for creating paragraphs and style 
    var ballset = dataset;
    


    var p = d3.select('#homerun-leaders')
            .selectAll('p')
            .data(ballset)
            .enter()

            p.append('p')
            .text(function(d, i) {
                return d.rank + '. ' + d.name + ' with ' + d.homeruns + ' home runs'
            })
            .style('font-weight', function(d) {
                return d.rank == '1' ? 'bold' : 'normal';
            });
    
    var tbody = d3.select('tbody')
    
    d3.select('thead')
            .style('background-color','darkgray')
    
    // d3.selectAll('thead tr td')
    //         .style('color', 'grey')

    // gets iterator for table rows bound to dataset 
    var trows = tbody.selectAll('tr')
            .data(ballset)
            .enter()
            .append('tr')
    // appends first set of data to each table row
            trows.append('td')
                .text(function(d,i) {
                    return d.rank
                })
                .style('text-align', 'center')  
    // appends second set of data to each table row        
            trows.append('td')
                .text(function(d,i) {
                    return d.name
                })
    // appends third set of data to each table row        
            trows.append('td')
                .text(function(d,i) {
                    return d.homeruns
                }) 
                .style('text-align', 'center') 
            
    


    
    
    console.log('Data Loaded and callback function complete');
});