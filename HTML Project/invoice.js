
$(document).ready(function(e) {
  let tableData= data;
  function createTable(){
    let htmlString = " ";
    for(let i=0 ; i<tableData.length; i++ ) {
      htmlString = `<tr>
        <td style="color:blue">${tableData[i].InvoiceId}</td>
        <td style="color:blue">${tableData[i].ClientName}</td>
        <td>${tableData[i].ClientType}</td>
        <td>${tableData[i].Date}</td>
        <td>${tableData[i].DueDate}</td>
        <td style="color:red">${tableData[i].Total}</td>
        <td style="color:red">${tableData[i].Balance}</td>
          <td class="`
        if(tableData[i].Status == "Draft"){
          htmlString += "draftClass"  
        } else if(tableData[i].Status == "Paid"){
          htmlString += "paidClass"     
        } else  if(tableData[i].Status == "Partial Payment"){
              htmlString += "partialPaymentClass"
        }
       
        htmlString +=`">${tableData[i].Status}</td>
      </tr>`
      $("#tableBody").append(htmlString);
    }
    $("#empTable").DataTable({
      paging: false,
      searching: false,
      info: false
    })
  }
  createTable()

  $(".filterData").change(function(){
    let statusValue = $("#status option:selected").val();
    let clientValue = $("#clientType option:selected").val();
    $("#tableBody").html("");
    let htmlString = "";
    for (let i = 0; i < tableData.length; i++) {
      if((statusValue != "") && (tableData[i].Status == statusValue) && (clientValue == "")) {
          htmlString = `<tr>
          <td style="color:blue">${tableData[i].InvoiceId}</td>
          <td style="color:blue">${tableData[i].ClientName}</td>
          <td>${tableData[i].ClientType}</td>
          <td>${tableData[i].Date}</td>
          <td>${tableData[i].DueDate}</td>
          <td style="color:red">${tableData[i].Total}</td>
          <td style="color:red">${tableData[i].Balance}</td>
          <td class="`
          if (tableData[i].Status == "Draft") {
            htmlString += "draftClass"
          } else if (tableData[i].Status == "Paid") {
            htmlString += "paidClass"
          } else if (tableData[i].Status == "Partial Payment") {
            htmlString += "partialPaymentClass"
          }

          htmlString += `">${tableData[i].Status}</td>
          </tr>`
          $("#tableBody").append(htmlString);
      }else if((clientValue != "") && (tableData[i].ClientType == clientValue) && (statusValue == "")){
          htmlString = `<tr>
          <td style="color:blue">${tableData[i].InvoiceId}</td>
          <td style="color:blue">${tableData[i].ClientName}</td>
          <td>${tableData[i].ClientType}</td>
          <td>${tableData[i].Date}</td>
          <td>${tableData[i].DueDate}</td>
          <td style="color:red">${tableData[i].Total}</td>
          <td style="color:red">${tableData[i].Balance}</td>
            <td class="`
          if (tableData[i].Status == "Draft") {
            htmlString += "draftClass"
          } else if (tableData[i].Status == "Paid") {
            htmlString += "paidClass"
          } else if (tableData[i].Status == "Partial Payment") {
            htmlString += "partialPaymentClass"
          }

          htmlString += `">${tableData[i].Status}</td>
            </tr>`
          $("#tableBody").append(htmlString);
      } else if ((tableData[i].Status == statusValue) && (tableData[i].ClientType == clientValue)) {
          htmlString = `<tr>
          <td style="color:blue">${tableData[i].InvoiceId}</td>
          <td style="color:blue">${tableData[i].ClientName}</td>
          <td>${tableData[i].ClientType}</td>
          <td>${tableData[i].Date}</td>
          <td>${tableData[i].DueDate}</td>
          <td style="color:red">${tableData[i].Total}</td>
          <td style="color:red">${tableData[i].Balance}</td>
          <td class="`
          if (tableData[i].Status == "Draft") {
            htmlString += "draftClass"
          } else if (tableData[i].Status == "Paid") {
            htmlString += "paidClass"
          } else if (tableData[i].Status == "Partial Payment") {
            htmlString += "partialPaymentClass"
          }
          htmlString += `">${tableData[i].Status}</td>
            </tr>`
          $("#tableBody").append(htmlString);
      }
    }
  })

});
