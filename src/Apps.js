import React from 'react'

export default function Apps() {
    var options = {
        shouldSort: true,
        threshold: 0.4,
        maxPatternLength: 32,
        keys: [{
          name: 'iata',
          weight: 0.5
        }, {
          name: 'name',
          weight: 0.3
        }, {
          name: 'city',
          weight: 0.2
        }]
      };
      
      var fuse = new Fuse(airports, options)
      
      var ac = $('#sourceLocation')
        .on('click', function(e) {
          e.stopPropagation();
        })
        .on('focus keyup', search)
        .on('keydown', onKeyDown);
      
      var wrap = $('<div>')
        .addClass('autocomplete-wrapper')
        .insertBefore(ac)
        .append(ac);
        
      var list = $('<div>')
        .addClass('autocomplete-results')
        .on('click', '.autocomplete-result', function(e) {
          e.preventDefault();
          e.stopPropagation();
          selectIndex($(this).data('index'));
        })
        .appendTo(wrap);
       
      $(document)
        .on('mouseover', '.autocomplete-result', function(e) {
          var index = parseInt($(this).data('index'), 10);
          if (!isNaN(index)) {
            list.attr('data-highlight', index);
          }
        })
        .on('click', clearResults);
      
      function clearResults() {
        results = [];
        numResults = 0;
        list.empty();
      }
      
      function selectIndex(index) {
        if (results.length >= index + 1) {
          ac.val(results[index].iata);
          clearResults();
        }  
      }
      
      var results = [];
      var numResults = 0;
      var selectedIndex = -1;
      
      function search(e) {
        if (e.which === 38 || e.which === 13 || e.which === 40) {
          return;
        }
        
        if (ac.val().length > 0) {
          results = _.take(fuse.search(ac.val()), 7);
          numResults = results.length;
         // console.log("data is here " + numResults); return false;
          var divs = results.map(function(r, i) {
              return '<div class="autocomplete-result" data-index="'+ i +'">'
                   + '<div><b>'+ r.iata +'</b> - '+ r.name +'</div>'
                   + '<div class="autocomplete-location">'+ r.city +', '+ r.country +'</div>'
                   + '</div>';
           });
          
          selectedIndex = -1;
          list.html(divs.join(''))
            .attr('data-highlight', selectedIndex);
      
        } else {
          numResults = 0;
          list.empty();
        }
      }
      
      function onKeyDown(e) {
        switch(e.which) {
          case 38: // up
            selectedIndex--;
            if (selectedIndex <= -1) {
              selectedIndex = -1;
            }
            list.attr('data-highlight', selectedIndex);
            break;
          case 13: // enter
            selectIndex(selectedIndex);
            break;
          case 9: // enter
            selectIndex(selectedIndex);
            e.stopPropagation();
            return;
          case 40: // down
            selectedIndex++;
            if (selectedIndex >= numResults) {
              selectedIndex = numResults-1;
            }
            list.attr('data-highlight', selectedIndex);
            break;
      
          default: return; // exit this handler for other keys
        }
        e.stopPropagation();
        e.preventDefault(); // prevent the default action (scroll / move caret)
      }
      
      
      var ac2 = $('#destinationLocation')
        .on('click', function(e) {
          e.stopPropagation();
        })
        .on('focus keyup', search2)
        .on('keydown', onKeyDown2);
      
      var wrap2 = $('<div>')
        .addClass('autocomplete-wrapper2')
        .insertBefore(ac2)
        .append(ac2);
        
      var list2 = $('<div>')
        .addClass('autocomplete-results2')
        .on('click', '.autocomplete-result2', function(e) {
          e.preventDefault();
          e.stopPropagation();
          selectIndex2($(this).data('index'));
        })
        .appendTo(wrap2);
       
      $(document)
        .on('mouseover', '.autocomplete-result2', function(e) {
          var index = parseInt($(this).data('index'), 10);
          if (!isNaN(index)) {
            list2.attr('data-highlight', index);
          }
        })
        .on('click', clearResults2);
      
      function clearResults2() {
        results2 = [];
        numResults2 = 0;
        list2.empty();
      }
      
      function selectIndex2(index) {
        if (results2.length >= index + 1) {
          ac2.val(results2[index].iata);
          clearResults2();
        }  
      }
      
      var results2 = [];
      var numResults2 = 0;
      var selectedIndex2 = -1;
      
      function search2(e) {
        if (e.which === 38 || e.which === 13 || e.which === 40) {
          return;
        }
        
        if (ac2.val().length > 0) {
          results2 = _.take(fuse.search(ac2.val()), 7);
          numResults2 = results2.length;
          
          var divs = results2.map(function(r, i) {
              return '<div class="autocomplete-result2" data-index="'+ i +'">'
                   + '<div><b>'+ r.iata +'</b> - '+ r.name +'</div>'
                   + '<div class="autocomplete-location">'+ r.city +', '+ r.country +'</div>'
                   + '</div>';
           });
          
          selectedIndex2 = -1;
          list2.html(divs.join(''))
            .attr('data-highlight', selectedIndex2);
      
        } else {
          numResults2 = 0;
          list2.empty();
        }
      }
      
      function onKeyDown2(e) {
        switch(e.which) {
          case 38: // up
            selectedIndex2--;
            if (selectedIndex2 <= -1) {
              selectedIndex2 = -1;
            }
            list2.attr('data-highlight', selectedIndex2);
            break;
          case 13: // enter
            selectIndex2(selectedIndex2);
            break;
          case 9: // enter
            selectIndex2(selectedIndex2);
            e.stopPropagation();
            return;
          case 40: // down
            selectedIndex2++;
            if (selectedIndex2 >= numResults2) {
              selectedIndex2 = numResults2-1;
            }
            list2.attr('data-highlight', selectedIndex2);
            break;
      
          default: return; // exit this handler for other keys
        }
        e.stopPropagation();
        e.preventDefault(); // prevent the default action (scroll / move caret)
      }












      $(function () {
        $("#range").daterangepicker({
          autoUpdateInput: false,
          autoApply: true,
          minDate: new Date(),
          locale: {
            cancelLabel: "Clear",
          },
        });

        $("#range").on("apply.daterangepicker", function (ev, picker) {
          $(this).val(
            picker.startDate.format("YYYY/MM/DD") +
              " - " +
              picker.endDate.format("YYYY/MM/DD")
          );
        });

        $("#range").on("cancel.daterangepicker", function (ev, picker) {
          $(this).val("");
        });
      });

      // $("#depart").daterangepicker(
      //   {
      //     singleDatePicker: true,
      //     autoUpdateInput: false,
      //     autoApply: true,
      //     minDate: new Date(),
      //   },
      //   (from_date) => {
      //     $("#depart").val(from_date.format("YYYY/MM/DD"));
      //   }
      // );


      
      
      $(function () {
        $("#depart").daterangepicker({
          singleDatePicker: true, // Set to true for a single date picker
          autoApply: true,
          minDate: new Date(),
          locale: {
            cancelLabel: "Clear",
          },
        });
      
        $("#depart").on("apply.daterangepicker", function (ev, picker) {
          $(this).val(picker.startDate.format("YYYY/MM/DD"));
        });
      });
      
}


