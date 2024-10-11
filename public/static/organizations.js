
var table;

// $(document).ready(function(){
//     const url = 
//     fetch(url,{ 
//             method: 'GET'
//           })
//           .then(function(response) { 
//             return response.json(); 
//         }).then(function(json) {
//             SetupDataTable(json);
//           });
    
// });

// function SetupDataTable(json)
$(document).ready(function(){
    if($('#org-table').length > 0)
	{
		table = $('#org-table').dataTable({
            layout: {
                bottomEnd: {
                    paging: {
                        firstLast: false
                    }
                }
            },
            //paginationType: "full_numbers",
            processing: true,
            serverSide:  true,
            ajaxSource: "http://localhost:7266/GetOrgPrograms?page=1&size=10",
            responsive: {
                details: {
                  type: 'column',
                  target: 0,
                },
              },
              drawCallback: function(settings, start, end, max, total, pre){
                console.log(start);
              },
              autoWidth: false,
              AutoWidth: false,
            //   dom: "<'row'<'col-sm-12 col-md-6'l<'#table-reset'><'#table-legend'>><'col-sm-12 col-md-6'f>>" +
            //   "<'row'<'col-sm-12'tr>>" +
            //   "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
            dom: "Bftrip",
              order: [[1, 'asc']],
              "columnDefs": [
                { "width": "10%", "targets": 0, "className": "control", "sortable": false },
                { "width": "60%", "targets": 1 },
                { "width": "20%", "targets": 2 },
                { "width": "20%", "targets": 3 }
              ],
              lengthMenu: [10, 25, 50],
              pageLength: 10,
            "columns": [
            {
                "render": function ( data, type, row ) {
                    return "";
                }
            },
            {
                "render": function ( data, type, row ) {
                    return row.url != "" 
                        ? "<a href='" + row.url + "' target='_blank' title='External Link to: " + row.program + "'>" + row.program + "</a>"
                        : row.program;
                    }
            }, {
                "data": "opportunityType"                
            }, {
                "data": "deliveryMethod"                
            }, {
                "data": "programDuration"                
            }, {
                "render": function(d, t, row){
                    return row.states.join();
                }
            }, {
                "render": function ( data, type, row ) {
                    return row.nationWide
                        ? "<span class='org-list-icon'>&#x2020;</span><span class='table-hidden-data'>Nationwide</span>"
                        : "";
                }
            }, {
                "render": function ( data, type, row ) {
                    return row.online
                    ? "<span class='org-list-icon'>&#42;</span><span class='table-hidden-data'>Online</span>"
                    : "";                
                }
            }, {
                "data": "cohorts"                
            }, {
                "data": "jobFamily"                
            }, {
                "render": function ( data, type, row ) {
                    return row.locationDetailAvailable 
                    ? "<a href='locations.htm' title='View Locations Page'>Yes</a>"
                    : "No";
                }              
            } 
            ,
        ],
        "destroy": true
		});
        $.fn.DataTable.ext.pager.numbers_length = 5;
	}
});