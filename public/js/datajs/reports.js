$(document).ready(function () {

    changelog = () => {

        let x = document.getElementById("showlogs").value

        if(x == "A"){

            document.getElementById("demo").innerHTML = '<iframe width="100%" height="540px" src="https://app.powerbi.com/reportEmbed?reportId=9b54806e-b3ff-4de1-be73-b3255b44f707&appId=e08c8ffb-a216-40d5-a909-616c71e66176&autoAuth=true&ctid=cd99fef8-1cd3-4a2a-9bdf-15531181d65e" frameborder="0" allowFullScreen="true"></iframe>';

        } else {

            document.getElementById("demo").innerHTML = '<iframe width="100%" height="540px" src="https://app.powerbi.com/reportEmbed?reportId=c5b40358-ac41-47b7-885a-8f784a60bdc8&autoAuth=true&ctid=cd99fef8-1cd3-4a2a-9bdf-15531181d65e" frameborder="0" allowFullScreen="true"></iframe>';


        }
 
    }

})