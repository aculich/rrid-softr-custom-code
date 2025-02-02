<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/tabulator-tables@6.2.1/dist/css/tabulator.min.css">
    <script type="text/javascript" src="https://unpkg.com/tabulator-tables@6.2.1/dist/js/tabulator.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/luxon@2.0.2/build/global/luxon.min.js"></script>
    <style>
        body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    
    .tabulator {
        height: 500px; /* Fixed height for scrollable area */
        width: 100%;   /* Set width to 100% of the container */
        max-width: 100%;
        margin: 0 auto; /* Center the table */
        border: 1px solid #ddd; /* Less prominent border */
        border-radius: 4px;
        background: #fff;
        overflow-x: auto; /* Enable horizontal scrolling */
        overflow: unset; /* Allow vertical scrolling */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Add shadow */
        transition: all 0.3s ease; /* Smooth transitions */
        display: block; /* Ensure the table behaves as a block element */
    }
    
    .tabulator .tabulator-header {
        background-color: #191d4bff; /* Dark blue header background */
        color: white; /* Header text color */
        font-weight: bold;
        position: sticky; /* Sticky header */
        top: 0; /* Stick to the top */
        z-index: 9; /* Ensure it stays above the rows */
    }
    
    .tabulator .tabulator-header .tabulator-col {
      background-color: #191d4bff; /* Dark blue column header background */
      color: white; /* Column header text color */
    }
    
    .tabulator .tabulator-cell {
      white-space: pre-wrap; /* Allow text to wrap */
      border: 1px solid #ddd;
      padding: 10px;
      transition: background-color 0.3s ease; /* Smooth transitions */
    }
    
    .tabulator .tabulator-row {
      border-bottom: 1px solid #ddd;
    }
    
    .tabulator .tabulator-row:nth-child(even) {
      background-color: rgba(78, 189, 210, 0.2); /* Less opaque color */
    }
    
    .tabulator .tabulator-row:nth-child(odd) {
      background-color: #ffffff; /* Alternate row color */
    }
    
    .tabulator .tabulator-row:hover {
      background-color: #e9ecef; /* Hover effect */
    }

    .tabulator .tabulator-row .tabulator-cell input {
      border: none;
      padding: 5px;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      background-color: #ffffff; /* white input background */
      color: #191d4bff; /* dark blue text color */
    }

    .tabulator .tabulator-row .tabulator-cell select {
      border: none;
      padding: 5px;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      background-color: #ffffff; /* white select background */
      color: #191d4bff; /* dark blue text color */
    }

    .tabulator .tabulator-row .tabulator-cell textarea {
      border: none;
      padding: 5px;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      background-color: #ffffff; /* white textarea background */
      color: #191d4bff; /* dark blue text color */
    }
    .tabulator .tabulator-header .tabulator-col.urgent-header {
        background-color: orange;
    }
    

    .tabulator-group.tabulator-group-active {
        display: block; /* Only show active group header */
    }

    

    </style>
</head>
<body>
    <div style="text-align: center; margin-bottom: 10px;">
        <small>Domain</small>
    </div>
    <div id="filter-buttons-domain" style="text-align: center; margin-bottom: 5px;">
        <button class="filter-button-domain" data-domain="PH" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">Public Health</button>
        <button class="filter-button-domain" data-domain="MedSci" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">Medical Sciences</button>
        <button class="filter-button-domain" data-domain="BCS" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">Biological and Chemical Sciences</button>
        <button class="filter-button-domain" data-domain="PSE" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">Physical Sciences and Engineering</button>
        <button class="filter-button-domain" data-domain="SSH" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">Social Sciences and Humanities</button>
    </div>
    <div style="text-align: center; margin-bottom: 10px;">
        <small>Preprint Status</small>
    </div>
    <div id="filter-buttons-preprint-status" style="text-align: center; margin-bottom: 5px;">
        <button class="filter-button-preprint-status" data-status="ACTIVE" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">ACTIVE</button>
        <button class="filter-button-preprint-status" data-status="ON HOLD" style="background-color: white; color: #050808; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">ON HOLD</button>
        <button class="filter-button-preprint-status" data-status="COMPLETE" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">COMPLETE</button>
         <button class="filter-button-preprint-status" data-status="INVITED" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">INVITED</button>
         <button class="filter-button-preprint-status" data-status="DISCARDED" style="background-color: white; color: #4ebdd2; border: 2px solid #4ebdd2; border-radius: 4px; padding: 10px; margin-right: 5px; cursor: pointer;">DISCARDED</button>
    </div>
    
    
    <div id="example-table"></div>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.7.2/dist/axios.min.js"></script>
    <script>
        const airtableToken = 'patxvMWE66lCprz7O.5ff60f4f628a145176a5c5badf898a8d495ae2f704b0895b2cf2d50fffca5c27';
        const baseId = 'appAYosfmfSuHWiBT';
        const tableId = 'tblHRiK0758oaO4jI';
        let table; // Define table variable here


        // Use the logged-in user's email from the window object
        const userEmail = window['logged_in_user']['softr_user_email'];

        async function fetchData() {
            const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;
            const headers = { Authorization: `Bearer ${airtableToken}` };
            let allRecords = [];
            let offset = null;
        
            do {
                const response = await axios.get(url, {
                    headers,
                    params: {
                        view: 'QC Portal',
                        offset: offset, // Include offset in params if it exists
                    },
                });
        
                console.log("Fetched batch of raw data from Airtable:", response.data.records);
                
                // Accumulate all records from this batch
                allRecords = [...allRecords, ...response.data.records];
        
                // Check if there’s more data to fetch
                offset = response.data.offset;
        
            } while (offset); // Keep fetching if there's an offset indicating more data
             
            const mappedData = allRecords
                .map(record => {
                    const fields = record.fields;
                    // Log Record ID and check for the specific field
       
                    fields.preprintId = fields["Preprint ID (pulled)"];
                    fields.Taken = fields.Taken !== undefined ? fields.Taken : false;
                    fields["Taken Email"] = fields["Taken Email"] !== undefined ? fields["Taken Email"] : null;
        
                    delete fields["Preprint ID (pulled)"];
                    return { id: record.id, ...fields };
                })
                .filter(record => record["Incomplete?"] !== "Yes"); // Filter out records with "Incomplete? = Yes"
        
            console.log("Mapped and filtered data:", mappedData); // Log the data after mapping and filtering
        
            return mappedData;
        }



        async function fetchRowData(recordId) {
            const url = `https://api.airtable.com/v0/${baseId}/${tableId}/${recordId}`;
            const headers = { Authorization: `Bearer ${airtableToken}` };
            const response = await axios.get(url, { headers });
            const fields = response.data.fields;

            // Set default values if they are undefined or missing
            fields.preprintId = fields["Preprint ID (pulled)"];
            fields.Taken = fields.Taken !== undefined ? fields.Taken : false;
            fields["Taken Email"] = fields["Taken Email"] !== undefined ? fields["Taken Email"] : null;

            delete fields["Preprint ID (pulled)"];
            return { id: response.data.id, ...fields };
        }


        async function updateAirtable(recordId, fieldName, currentValue) {
            const url = `https://api.airtable.com/v0/${baseId}/${tableId}/${recordId}`;
            const headers = { Authorization: `Bearer ${airtableToken}`, 'Content-Type': 'application/json' };
            
            // Create a data object with only the field that is being updated
            let data = {
                fields: {
                    [fieldName]: currentValue
                }
            };
        
            // If the "Status" field is being updated, also add the "Email of Quality Checker" and "Date of Quality Check"
            if (fieldName === "Status") {
                const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
                data.fields['Email of Quality Checker'] = userEmail;
                data.fields['Date of Quality Check'] = currentDate;
            }
            /* const data = {
                fields: {
                    [fieldName]: currentValue,
                    'Email of Quality Checker': userEmail, 
                    'Date of Quality Check': currentDate
                }
            };*/

            try {
                await axios.patch(url, data, { headers });
                console.log(`Updated record ${recordId}: ${fieldName} = ${currentValue}`);
            } catch (error) {
                console.error(`Error updating record ${recordId}:`, error);
            }
        }
async function claimAndEditRow(cell) {
    const row = cell.getRow();
    const recordId = row.getData().id;
    const userEmail = window['logged_in_user']['softr_user_email'];
    const buttonElement = cell.getTable().getRow(recordId).getCell("expandView").getElement().buttonElement;

    // Fetch the latest data for the record to ensure we are working with the most recent information
    const latestData = await fetchRowData(recordId);

    // Check if the row is already claimed by someone else
    /*if (latestData["Taken"] && latestData["Taken Email"] !== userEmail) {
        alert("This record is already taken by another user.");
        row.update(latestData); // Refresh the row to show the latest data
        buttonElement.disabled = true;
        buttonElement.style.cursor = "not-allowed";
        buttonElement.style.backgroundColor = "#ccc"; // Indicate disabled state
        return false; // Prevent further editing
    } */
    
    if (latestData["Taken"] && latestData["Taken Email"] !== userEmail) {
        latestData["Taken"] = true;
        latestData["Taken Email"] = userEmail;
        await updateAirtable(recordId, "Taken", true);
        await updateAirtable(recordId, "Taken Email", userEmail);
        row.update(latestData); // Update the UI
        buttonElement.disabled = false;
        buttonElement.style.cursor = "pointer";
        buttonElement.style.backgroundColor = "#4ebdd2"; // Enable the button
        return true; // Allow editing after claiming
    }
    else if (latestData["Taken"] && latestData["Taken Email"] === userEmail) { // If the row is already claimed by the current user, allow them to unclaim it
        latestData["Taken"] = false;
        latestData["Taken Email"] = null;
        await updateAirtable(recordId, "Taken", false);
        await updateAirtable(recordId, "Taken Email", null);
        row.update(latestData); // Update the UI
        buttonElement.disabled = true;
        buttonElement.style.cursor = "not-allowed";
        buttonElement.style.backgroundColor = "#ccc"; // Indicate disabled state
        return false; // Prevent further editing until they re-claim it
    } else if (!latestData["Taken"]) {  // If the row is not claimed, allow the current user to claim it
        latestData["Taken"] = true;
        latestData["Taken Email"] = userEmail;
        await updateAirtable(recordId, "Taken", true);
        await updateAirtable(recordId, "Taken Email", userEmail);
        row.update(latestData); // Update the UI
        buttonElement.disabled = false;
        buttonElement.style.cursor = "pointer";
        buttonElement.style.backgroundColor = "#4ebdd2"; // Enable the button
        return true; // Allow editing after claiming
    }

    return true;
}





        function customMultiSelectFilter(headerValue, rowValue) {
            if (!headerValue || headerValue.length === 0) {
                return true;
            }
            if (Array.isArray(rowValue)) {
                return rowValue.some(val => headerValue.includes(val));
            }
            return headerValue.includes(rowValue);
        }
        // Preload the Status filter
        function preloadStatusFilter() {
            table.setHeaderFilterValue("Status", ["Unchecked", "Fixed", "Double Check"]);
        }

        function customFilter(data) {
            const status = data["Status"];
            const preprintStatus = data["Preprint Status (from Preprint Info ONLY)"];
            console.log('Filtering - Status:', status, 'Preprint Status:', preprintStatus);
            
            // Check if preprintStatus is an array and get the first element if it is
            const preprintStatusValue = Array.isArray(preprintStatus) ? preprintStatus[0] : preprintStatus;
            
            const result = (status === "Unchecked" || status === "Fixed" || status === "Double Check") &&
                        (preprintStatusValue === "ON HOLD" || preprintStatusValue === "ACTIVE");
            console.log('Filter result:', result);
            return result;
        }


        function rowPopupFormatter(row) {
            const existingPopup = document.getElementById("row-popup");
            if (existingPopup) {
                existingPopup.remove();
            }
    
            const data = row.getData();
            const container = document.createElement("div");
            let contents = "<strong style='font-size:1.2em; display: block; margin-bottom: 10px;'>Row Details</strong><div style='display: flex; flex-direction: column; gap: 10px;'>";
    
            const columnDefs = [
            { title: "Preprint Title", field: "Preprint Title" },
            { title: "Domain", field: "Domain" },
            { title: "Status", field: "Status", editor: "list", editorParams: { values: ["Invite", "Invite Backup", "Double Check", "Reject", "Fixable", "Unchecked", "Student Reject"] }},
            { title: "Student Reject Reason", field: "Student Reject Reason" },
            { title: "Quality Check Reviewer Comments", field: "Quality Check Reviewer Comments" },
            { title: "Student Reply Comments", field: "Student Reply Comments" },
            { title: "Reviewer First Name", field: "First Name (Proposed Reviewer)" },
            { title: "Reviewer Last Name", field: "Last Name (Proposed Reviewer)" },
            { title: "Reviewer Email", field: "Reviewer Email" },
            { title: "Justification if not Institutional Email", field: "Justification if not Institutional Email" },
            { title: "Backup Reviewer?", field: "Backup Reviewer?" },
            { title: "Invite Backup For...", field: "Invite Backup For..." },
            { title: "Justification Should not be Backup", field: "Justification Should not be Backup" },
            { title: "Affiliation", field: "Affiliation" },
            { title: "Justification Same Affiliation as Author", field: "Justification Same Affiliation as Author" },
            { title: "Secondary Affiliation", field: "Secondary Affiliation" },
            { title: "Highest Degree", field: "Highest Degree", editor: "list", editorParams: { values: ["PhD", "DrPH", "DO", "MBBS", "JD", "EdD", "MD"] }},
            { title: "Other Degree", field: "Other Degree" },
            { title: "Title", field: "Title", editor: "list", editorParams: { values: ["Professor", "Assistant Professor", "Scientist", "Associate Professor", "Research Officer", "Researcher", "Research Associate Professor"]}},
            { title: "Link to Profile", field: "Link to Profile" },
            { title: "Justification for Non-Institutional Profile", field: "Justification for Non-Institutional Profile" },
            { title: "Subdiscipline", field: "Subdiscipline" },
            { title: "Link to Publications", field: "Link to Publications" },
            { title: "Justification if Link to Publications Not Pubmed", field: "Justification if Publications not Pubmed" },
            { title: "Link to Best Match Paper", field: "DOI of Best Match Paper" },
            { title: "Justification for Invite", field: "Justification for Invite" },
            { title: "Student", field: "Student" },
            { title: "Student Email", field: "Student Email" },
            { title: "Date of Proposal", field: "Date of Proposal" },
            { title: "Preprint Status (from Preprint Info ONLY)", field: "Preprint Status (from Preprint Info ONLY)" },
            { title: "Email of Quality Checker", field: "Email of Quality Checker" },
            ];
    
            const nonEditableFields = [
            "Student",
            "Student Reject Reason",
            "Student Email",
            "Date of Proposal",
            "Preprint Status (from Preprint Info ONLY)",
            "Preprint Title",
            "Domain",
            "Email of Quality Checker",
            
            ];

        columnDefs.forEach(column => {
        const key = column.field;
        
        if (key && (data[key] !== undefined || key === "Quality Check Reviewer Comments" || key === "Justification Should not be Backup")) {
            let value = data[key] || "";
            

            if (key === "Backup Reviewer?") {
                value = value ? "Yes" : "No";
            }

            if (nonEditableFields.includes(key)) {
                contents += `<div><strong>${column.title}:</strong> ${value}</div>`;
            } else if (key === "Link to Profile" || key === "Link to Publications" || key === "DOI of Best Match Paper") {
                const displayText = value.startsWith("https") ? value.replace(/^https?:\/\//, '') : value;
                contents += `<div><strong>${column.title}:</strong>
                            <span class="editable-link" data-field="${key}" data-value="${value}">
                                <a href="${value}" target="_blank">${displayText}</a>
                                <input type="text" class="popup-input" style="display:none;" value="${displayText}">
                            </span>
                            </div>`;
            } else if (key === "Status") {
                contents += `<div><strong>${column.title}:</strong> 
                            <select class="popup-input" data-field="${key}">
                                <option value="Invite"${value === "Invite" ? " selected" : ""}>Invite</option>
                                <option value="Invite Backup"${value === "Invite Backup" ? " selected" : ""}>Invite Backup</option>
                                <option value="Double Check"${value === "Double Check" ? " selected" : ""}>Double Check</option>
                                <option value="Reject"${value === "Reject" ? " selected" : ""}>Reject</option>
                                <option value="Fixable"${value === "Fixable" ? " selected" : ""}>Fixable</option>
                                <option value="Unchecked"${value === "Unchecked" ? " selected" : ""}>Unchecked</option>
                                <option value="Fixed"${value === "Fixed" ? " selected" : ""}>Fixed</option>
                                <option value="Student Reject"${value === "Student Reject" ? " selected" : ""}>Fixed</option>
                            </select>
                            </div>`;
            }else if (key === "Title") {
                contents += `<div><strong>${column.title}:</strong> 
                            <select class="popup-input" data-field="${key}">
                                <option value="Professor"${value === "Professor" ? " selected" : ""}>Professor</option>
                                <option value="Assistant Professor"${value === "Assistant Professor" ? " selected" : ""}>Assistant Professor</option>
                                <option value="Scientist"${value === "Scientist" ? " selected" : ""}>Scientist</option>
                                <option value="Associate Professor"${value === "Associate Professor" ? " selected" : ""}>Associate Professor</option>
                                <option value="Research Officer"${value === "Research Officer" ? " selected" : ""}>Research Officer</option>
                                <option value="Researcher"${value === "Researcher" ? " selected" : ""}>Researcher</option>
                                <option value="Fixed"${value === "Fixed" ? " selected" : ""}>Fixed</option>
                                <option value="Research Associate Professor"${value === "Research Associate Professor" ? " selected" : ""}>Research Associate Professor</option>
                            </select>
                            </div>`;
            }else if (key === "Highest Degree") {
                contents += `<div><strong>${column.title}:</strong> 
                            <select class="popup-input" data-field="${key}">
                                <option value="PhD"${value === "PhD" ? " selected" : ""}>PhD</option>
                                <option value="DrPH"${value === "DrPH" ? " selected" : ""}>DrPH</option>
                                <option value="DO"${value === "DO" ? " selected" : ""}>DO</option>
                                <option value="MBBS"${value === "MBBS" ? " selected" : ""}>MBBS</option>
                                <option value="JD"${value === "JD" ? " selected" : ""}>JD</option>
                                <option value="EdD"${value === "EdD" ? " selected" : ""}>EdD</option>
                                <option value="MD"${value === "MD" ? " selected" : ""}>MD</option>
                            </select>
                            </div>`;
            }
            else if (key === "Justification for Invite") {
                contents += `<div><strong>${column.title}:</strong> 
                            <textarea class="popup-input" data-field="${key}" rows="4" style="width: 100%;">${value}</textarea>
                            </div>`;
            } else {
                contents += `<div><strong>${column.title}:</strong> 
                            <input type="text" class="popup-input" data-field="${key}" value="${value}" />
                            </div>`;
            }
        }
        });

        contents += "</div>";

        const exitButton = document.createElement("button");
        exitButton.innerHTML = "X";
        exitButton.style.position = "absolute";
        exitButton.style.top = "10px";
        exitButton.style.right = "10px";
        exitButton.style.backgroundColor = "blue";
        exitButton.style.color = "white";
        exitButton.style.border = "none";
        exitButton.style.borderRadius = "50%";
        exitButton.style.cursor = "pointer";
        exitButton.id = "exit-button";

        container.appendChild(exitButton);
        container.innerHTML += contents;
        container.style.position = "fixed";
        container.style.top = "50%";
        container.style.left = "50%";
        container.style.transform = "translate(-50%, -50%)";
        container.style.padding = "20px";
        container.style.border = "1px solid #ddd";
        container.style.backgroundColor = "#fff";
        container.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        container.style.borderRadius = "4px";
        container.style.maxWidth = "600px";
        container.style.maxHeight = "80%";
        container.style.overflowY = "auto";
        container.style.zIndex = "1000";
        container.id = "row-popup";

        document.body.appendChild(container);

        document.getElementById("exit-button").onclick = function() {
            container.remove();
            var previousHighlightedRow = document.querySelector(".tabulator-row[style*='rgba(78, 189, 210, 0.5)']");
            if (previousHighlightedRow) {
                previousHighlightedRow.style.backgroundColor = "";
            }
            };
    
            // Attach event listeners to input elements for inline editing
            const inputs = container.querySelectorAll('.popup-input');
            inputs.forEach(input => {
            input.addEventListener('change', function() {
                const field = this.getAttribute('data-field');
                let newValue = this.value;
                console.log(`Updating field ${field} to ${newValue}`);
    
                if (field === "Link to Publications" || field === "DOI of Best Match Paper") {
                    newValue = `https://${newValue.replace(/^https?:\/\//, '')}`;
                }
    
                row.update({ [field]: newValue });
    
                // Optionally, update Airtable directly from here
                const recordId = row.getData().id;
                updateAirtable(recordId, field, newValue);
            });
        });

        // Toggle between displaying the link and input field on double-click or right-click
        // Toggle between displaying the link and input field on double-click or right-click
const editableLinks = container.querySelectorAll('.editable-link');
editableLinks.forEach(linkContainer => {
    const link = linkContainer.querySelector('a');
    const input = linkContainer.querySelector('input');

    link.addEventListener('click', function(event) {
        // Open link in new tab
        window.open(link.href, '_blank');
    });

    link.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        link.style.display = 'none';
        input.style.display = 'inline-block';
        input.focus();
    });

    input.addEventListener('blur', function() {
        let newValue = input.value.trim();
        const url = newValue.startsWith("http") ? newValue : `http://${newValue}`;
        link.href = url;
        link.textContent = newValue.length > 30 ? newValue.substring(0, 30) + "..." : newValue;

        input.style.display = 'none';
        link.style.display = 'inline';

        // Update the row in Tabulator and Airtable
        const field = linkContainer.getAttribute('data-field');
        const recordId = row.getData().id;
        row.update({ [field]: url });
        updateAirtable(recordId, field, url); // Save to Airtable
    });

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            input.blur(); // Trigger the blur event to save
        }
    });
});

        
        
        }


                



//display a read-only view of the row details
function viewRowPopupFormatter(row) {
    const existingPopup = document.getElementById("view-row-popup");
    if (existingPopup) {
        existingPopup.remove();
    }

    const data = row.getData();
    const container = document.createElement("div");
    let contents = "<strong style='font-size:1.2em; display: block; margin-bottom: 10px;'>Row Details (View Only)</strong><div style='display: flex; flex-direction: column; gap: 10px;'>";

    const columnDefs = [
            { title: "Preprint Title", field: "Preprint Title" },
            { title: "Domain", field: "Domain" },
            { title: "Status", field: "Status"},
            { title: "Student Reject Reason", field: "Student Reject Reason" },
            { title: "Quality Check Reviewer Comments", field: "Quality Check Reviewer Comments" },
            { title: "Student Reply Comments", field: "Student Reply Comments" },
            { title: "Reviewer First Name", field: "First Name (Proposed Reviewer)" },
            { title: "Reviewer Last Name", field: "Last Name (Proposed Reviewer)" },
            { title: "Reviewer Email", field: "Reviewer Email" },
            { title: "Justification if not Institutional Email", field: "Justification if not Institutional Email" },
            { title: "Backup Reviewer?", field: "Backup Reviewer?" },
            { title: "Invite Backup For...", field: "Invite Backup For..." },
            { title: "Justification Should not be Backup", field: "Justification Should not be Backup" },
            { title: "Affiliation", field: "Affiliation" },
            { title: "Justification Same Affiliation as Author", field: "Justification Same Affiliation as Author" },
            { title: "Secondary Affiliation", field: "Secondary Affiliation" },
            { title: "Highest Degree", field: "Highest Degree"},
            { title: "Other Degree", field: "Other Degree" },
            { title: "Title", field: "Title"},
            { title: "Link to Profile", field: "Link to Profile" },
            { title: "Justification for Non-Institutional Profile", field: "Justification for Non-Institutional Profile" },
            { title: "Subdiscipline", field: "Subdiscipline" },
            { title: "Link to Publications", field: "Link to Publications" },
            { title: "Justification if Link to Publications Not Pubmed", field: "Justification if Publications not Pubmed" },
            { title: "Link to Best Match Paper", field: "DOI of Best Match Paper" },
            { title: "Justification for Invite", field: "Justification for Invite" },
            { title: "Student", field: "Student" },
            { title: "Student Email", field: "Student Email" },
            { title: "Date of Proposal", field: "Date of Proposal" },
            { title: "Preprint Status (from Preprint Info ONLY)", field: "Preprint Status (from Preprint Info ONLY)" },
            { title: "Email of Quality Checker", field: "Email of Quality Checker" },
            ];

    columnDefs.forEach(column => {
        const key = column.field;
        if (data[key] !== undefined) {
            let value = data[key] || "";
            if (key === "Backup Reviewer?") {
                value = value ? "Yes" : "No";
            }

            if (key === "Link to Profile" || key === "Link to Publications" || key === "DOI of Best Match Paper") {
                const displayText = value.startsWith("https") ? value.replace(/^https?:\/\//, '') : value;
                contents += `<div><strong>${column.title}:</strong> <a href="${value}" target="_blank">${displayText}</a></div>`;
            } else {
                contents += `<div><strong>${column.title}:</strong> ${value}</div>`;
            }
        }
    });

    contents += "</div>";

    const exitButton = document.createElement("button");
    exitButton.innerHTML = "X";
    exitButton.style.position = "absolute";
    exitButton.style.top = "10px";
    exitButton.style.right = "10px";
    exitButton.style.backgroundColor = "blue";
    exitButton.style.color = "white";
    exitButton.style.border = "none";
    exitButton.style.borderRadius = "50%";
    exitButton.style.cursor = "pointer";
    exitButton.id = "exit-button";

    container.appendChild(exitButton);
    container.innerHTML += contents;
    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.padding = "20px";
    container.style.border = "1px solid #ddd";
    container.style.backgroundColor = "#fff";
    container.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    container.style.borderRadius = "4px";
    container.style.maxWidth = "600px";
    container.style.maxHeight = "80%";
    container.style.overflowY = "auto";
    container.style.zIndex = "1000";
    container.id = "view-row-popup";

    document.body.appendChild(container);

    document.getElementById("exit-button").onclick = function() {
        container.remove();
        var previousHighlightedRow = document.querySelector(".tabulator-row[style*='rgba(78, 189, 210, 0.5)']");
        if (previousHighlightedRow) {
            previousHighlightedRow.style.backgroundColor = "";
        }
    };
}

// Formatter for View button that opens the row in read-only mode
function viewButtonFormatter(cell, formatterParams, onRendered) {
    var button = document.createElement("button");
    button.innerHTML = "View";
    button.style.backgroundColor = "#4ebdd2";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    // Always enable the button
    button.onclick = function () {
        viewRowPopupFormatter(cell.getRow()); // Open in read-only mode
    };

    return button;
}



 function expandViewButtonFormatter(cell, formatterParams, onRendered) {
    var button = document.createElement("button");
    button.innerHTML = "Expand";
    button.style.backgroundColor = "#4ebdd2";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    // Initially disable the button if not claimed
    var rowData = cell.getRow().getData();
    var userEmail = window['logged_in_user']['softr_user_email'];

    if (!rowData["Taken"] || rowData["Taken Email"] !== userEmail ) {
        button.disabled = true;
        button.style.cursor = "not-allowed";
        button.style.backgroundColor = "#ccc"; // Indicate disabled state
        //button.title = "You cannot expand this view because the row is not claimed by you.";
    }

    // Handle button click
    button.onclick = function () {
        if (!button.disabled) {
            var previousHighlightedRow = document.querySelector(".tabulator-row[style*='rgba(78, 189, 210, 0.5)']");
            if (previousHighlightedRow) {
                previousHighlightedRow.style.backgroundColor = "";
            }
            var currentRowElement = cell.getRow().getElement();
            currentRowElement.style.backgroundColor = "rgba(78, 189, 210, 0.5)";
            rowPopupFormatter(cell.getRow());
        }
    };

    // Store the button reference in the cell's element for later access
    cell.getElement().buttonElement = button;

    return button;
}




        // Custom group header formatter to color based on "Urgent" status
        function customGroupHeader(value, count, data, group) {
        const isUrgent = data.some(row => {
        const urgent = row["Urgent"];
        return Array.isArray(urgent) ? urgent.includes("Yes") || urgent.includes(true) : urgent === "Yes" || urgent === true;
        });

        const preprintTitle = data[0]["Preprint Title"];
        const domain = data[0]["Domain"];
        const inviteCount = data[0]["Invite Count"];
        const uncheckedCount = data[0]["Unchecked Count"];
        const totalProposals = data[0]["Proposed Count"];
         const doi = data[0]["Link/DOI"]; 
       
        
        // Return the formatted group header with a hyperlink for the preprint title
        return `<span style="display: inline-block; padding: 5px; ${isUrgent ? 'background-color: rgba(255, 0, 0, 0.3); color: black;' : 'color: black;'}">
                    ${domain}, ${totalProposals} proposals, ${uncheckedCount} Unchecked, ${inviteCount} Invites, - 
                    <a href=${doi} target="_blank" style="text-decoration: none; color: blue;">
                        ${preprintTitle}
                    </a>
                </span>`;
    }
    
        // Function to highlight rows with "Duplicate Domain" checked
        function highlightDuplicateDomains() {
            const rows = table.getRows();
    
            //highlight duplicate domain and invite backup
            rows.forEach(row => {
                const duplicateDomain = row.getData()["Duplicate Domain"];
                const invitedforOtherPreprint = row.getData()["Invited for Other Preprint"];
                const shouldNotBeInviteBackup = row.getData()["Should not be backup"];
                const rowElement = row.getElement();
                //green lit else where:  rowElement.style.backgroundColor = "rgba(240, 128, 128, 0.3)"; // Light coral for duplicate domain
                if (shouldNotBeInviteBackup) {
                    rowElement.style.backgroundColor = "rgba(255, 165, 0, 0.3)"; // Light orange
                   
                } else if (duplicateDomain) {
                    rowElement.style.backgroundColor = "rgba(221, 160, 221, 0.3)"; // Light purple (lavender) with transparency

                   
                }else if (invitedforOtherPreprint) {
                    rowElement.style.backgroundColor = "rgba(240, 128, 128, 0.3)"; // Light coral if invited elsewhere

                   
                } else {
                    rowElement.style.backgroundColor = ""; // Reset to default
                }
            });
    
        }

        fetchData().then(data => {
            console.log('Fetched data:', data);
            //const columns = Object.keys(data[0]).map(key => ({ title: key, field: key }));
            /*
            const columns = Object.keys(data[0])
                .filter(key => key !== 'id' && key !== 'Preprint Title' && key !== 'Domain' && key !== 'recordid' && key !== 'preprintId')
                .map(key => ({ title: key, field: key }));
                */
            
            const columns = [
                
                 { title: "View", field: "view", formatter: viewButtonFormatter, width: 100, headerSort: false, width: "fitData", editor: false },
    
                { title: "Expand", field: "expandView", formatter: expandViewButtonFormatter, width: 100, headerSort: false, width: "fitData", editor: false },
                {
                    title: "Claimed",
                    field: "Taken",
                    //formatter: "tickCross", // Display checkbox
                    formatter: function(cell, formatterParams, onRendered) {
                        const rowData = cell.getRow().getData();
                        const takenEmail = rowData["Taken Email"];
                        const userEmail = window['logged_in_user']['softr_user_email'];
                        let icon;
                
                        // If the row is claimed by the logged-in user
                        if (takenEmail === userEmail) {
                            icon = "<span style='color: green;'>&#10004;</span>"; // Green check mark
                        } 
                        // If the row is claimed by someone else
                        else if (takenEmail) {
                            icon = "<span style='color: red;'>&#10008;</span>"; // Red "X"
                        } 
                        // If the row is unclaimed
                        else {
                            icon = "<span style='border: 1px solid #ddd; padding: 2px 4px; display: inline-block;'>&nbsp;</span>"; // Empty box
                        }
                
                        return icon;
                    },
                    editor: true, // Display as a checkbox
                    width: "fitData",
                    headerSort: false,
                    cellClick: async function (e, cell) {
                        const canEdit = await claimAndEditRow(cell);
                        if (!canEdit) {
                            cell.cancelEdit(); // Prevent editing if the row was not successfully claimed
                        }
                    }
                },
                

                
                {
                    title: "Claimed Email",
                    field: "Taken Email",
                    headerFilter: "tickCross",  // Checkbox filter
                    headerFilterFunc: function(headerValue, rowValue) {
                        const userEmail = window['logged_in_user']['softr_user_email'];
                        
                        if (headerValue === true) {
                            // Filter to show only rows where "Taken Email" is empty or matches user's email
                            return !rowValue || rowValue === userEmail;
                        }
                        // If unchecked, show all rows
                        return true;
                    },
                    formatter: function(cell) {
                        // Return the actual Taken Email value
                        const value = cell.getValue();
                        return value ? value : "Unclaimed"; // If no email, show "Unclaimed"
                    },
                    width: 100,
                    headerSort: false
                },

              
                {
                    title: "Status",
                    field: "Status",
                    editor: "list",
                    editorParams: { values: ["Invite", "Invite Backup", "Double Check", "Reject", "Fixable", "Unchecked", "Fixed"] },
                    headerFilter: "list",
                    headerFilterParams: {
                        values: ["Invite", "Invite Backup", "Double Check", "Reject", "Fixable", "Unchecked", "Fixed"],
                        multiselect: true,
                        multiselectFilter: true,
                    },
                    headerFilterFunc: customMultiSelectFilter,
                    width: "fitData",
                    headerSort: false,
                    formatter: function(cell, formatterParams, onRendered) {
                        var value = cell.getValue();
                        var color = "";
                
                        switch (value) {
                            case "Invite":
                                color = "rgba(0, 255, 0, 0.3)"; // Green
                                break;
                            case "Fixable":
                                color = "rgba(255, 165, 0, 0.6)"; // Orange
                                break;
                            case "Fixed":
                                color = "rgba(255, 69, 0, 0.8)"; // Blood Orange for Fixed
                                break;
                            case "Invite Backup":
                                color = "rgba(0, 255, 128, 0.3)"; // Teal
                                break;
                            case "Double Check":
                                color = "rgba(255, 255, 0, 0.6)"; // Yellow
                                break;
                            case "Reject":
                                color = "rgba(255, 0, 0, 0.6)"; // Red
                                break;
                            case "Unchecked":
                                color = "rgba(192, 192, 192, 0.6)"; // Grey
                                break;
                            default:
                                color = ""; // No color
                                break;
                        }
                
                        cell.getElement().style.backgroundColor = color;
                        return value;
                    }
                },
                { title: "Quality Check Comments", field: "Quality Check Reviewer Comments", editor: "input", headerSort: false, width: 150 },
                { 
                    title: "Link to Profile", 
                    field: "Link to Profile",
                    width: 200,
                    formatter: function(cell, formatterParams, onRendered) {
                        var value = cell.getValue();
                        if (value && typeof value === 'string' && value.startsWith("https")) {
                            var url = value.startsWith("https") ? value : `https://${value}`;
                            var displayText = value.length > 30 ? value.substring(0, 30) + "..." : value;
                            return `<a href="${url}" target="_blank">${displayText}</a>`;
                        } else {
                            return value || "";
                        }
                    } 
                },
                { 
                    title: "Link to Publications", 
                    field: "Link to Publications",
                    width: 200,
                    formatter: function(cell, formatterParams, onRendered) {
                        var value = cell.getValue();
                        if (value && typeof value === 'string' && value.startsWith("https")) {
                            var url = value.startsWith("https") ? value : `https://${value}`;
                            var displayText = value.length > 30 ? value.substring(0, 30) + "..." : value;
                            return `<a href="${url}" target="_blank">${displayText}</a>`;
                        } else {
                            return value || "";
                        }
                    } 
                },
                { title: "Reviewer First Name", field: "First Name (Proposed Reviewer)" },
                { title: "Reviewer Last Name", field: "Last Name (Proposed Reviewer)" },
                { title: "Reviewer Email", field: "Reviewer Email" },
                
                { title: "Student Reply Comments", field: "Student Reply Comments", headerSort: false, width: "fitData"  },
                { title: "Student Reject Reason", field: "Student Reject Reason", headerSort: false, width: "fitData"  },
                
                
                { title: "Justification if not Institutional Email", field: "Justification if not Institutional Email" },
                { title: "Backup Reviewer?", field: "Backup Reviewer?" },
                { title: "Invite Backup For...", field: "Invite Backup For..." },
                { title: "Justification Should not be Backup", field: "Justification Should not be Backup" },
                
                { title: "Affiliation", field: "Affiliation" },
                { title: "Justification Same Affiliation as Author", field: "Justification Same Affiliation as Author" },
                { title: "Secondary Affiliation", field: "Secondary Affiliation" },
                { title: "Highest Degree", field: "Highest Degree", editor: "list",
                    editorParams: { values: ["PhD", "DrPH", "MD", "MBBS", "JD", "EdD", "DO"] },
                    headerSort: false
                },
                { title: "Other Degree", field: "Other Degree" },
                { title: "Title", field: "Title", editor: "list",
                    editorParams: { values: ["Professor", "Associate Professor", "Assistant Professor", "Research Associate Professor", "Director", "Department Head", "Researcher", "Research Officer"] },
                    headerSort: false
                    
                },
                
                { title: "Justification for Non-Institutional Profile", field: "Justification for Non-Institutional Profile" },
                { title: "Subdiscipline", field: "Subdiscipline" },
                
                { title: "Justification if Link to Publications Not Pubmed", field: "Justification if Publications not Pubmed" },
                { 
                    title: "Link to Best Match Paper", 
                    field: "DOI of Best Match Paper", 
                    width: 200,
                    formatter: function(cell, formatterParams, onRendered) {
                        var value = cell.getValue();
                        if (value && typeof value === 'string' && value.startsWith("https")) {
                            var url = value.startsWith("https") ? value : `https://${value}`;
                            var displayText = value.length > 30 ? value.substring(0, 30) + "..." : value;
                            return `<a href="${url}" target="_blank">${displayText}</a>`;
                        } else {
                            return value || "";
                        }
                    } 
                },
                { title: "Justification for Invite", field: "Justification for Invite" },
                { title: "Student", field: "Student" },
                { title: "Student Email", field: "Student Email" },
                { title: "Email of Quality Checker", field: "Email of Quality Checker" },
                { title: "Date of Proposal", field: "Date of Proposal" },
                { title: "Date of Quality Check", field: "Date of Quality Check" },
                { title: "Preprint Status", field: "Preprint Status (from Preprint Info ONLY)" },
                { title: "Urgent", field: "Urgent" },
                { title: "Duplicate Domain", field: "Duplicate Domain"},
            ];
            console.log('Column Definitions:', columns);

        // Calculate total width of all columns
        const totalWidth = columns.reduce((sum, column) => {
            const columnWidth = column.width === "fitData" ? 150 : (parseInt(column.width) || 150);
            console.log(`Column: ${column.title}, Width: ${columnWidth}`);
            return sum + columnWidth;
        }, 0);

        //console.log("Calculated total width: " + totalWidth);

        // Set the width of the table container
        const tableElement = document.getElementById('example-table');
        tableElement.style.width = `${totalWidth}px`;
        //console.log("Set width of table container: " + tableElement.style.width);


            // Make all fields editable except the "Status" column which has specific settings
            const editableColumns = columns.map(col => {
                if (col.field !== "Status" && col.field !== "Quality Check Reviewer Comments"&& col.field !== "Taken Email"&& col.field !== "Title"&& col.field !== "Highest Degree"&& col.field !== "expandView" && col.field !== "Student Reply Comments") {
                    return { ...col, editor: "input", headerSort: false, width: "fitData" };
                }
                return col;
            });

            table = new Tabulator("#example-table", {
                data: data, // Load row data into Tabulator
                columns: editableColumns, // Define table columns
                height: "100%",
                layout: "fitDataTable",
                groupBy: "preprintId", // Group rows by Preprint ID
                groupStartOpen: false, // Start with groups collapsed
                
                initialSort: [
                    { column: "Date of Proposal", dir: "asc" }
                ],
                groupHeader: customGroupHeader, 
                /*
                groupHeader: function(value, count, data) {
                    const inviteCount = data[0]["Invite Count"];
                    const preprintTitle = data[0]["Preprint Title"];
                    const domain = data[0]["Domain"];

                    return `${domain}, ${inviteCount} Invites,<span style='color:#d00;'>${count} items</span> - ${preprintTitle}`;
                },*/
                groupToggleElement: "header", // Allow toggling by clicking the group header
            });
        // Color the group headers based on "Urgent"
        function colorUrgentGroupHeaders() {
        console.log("Running colorUrgentGroupHeaders function");

        // First, reset all group headers to the default background color
        table.getGroups().forEach(group => {
        const groupElement = group.getElement();
        groupElement.style.backgroundColor = ""; // Reset to default
        });

        // Then, apply the color to the "Urgent" groups
        table.getGroups().forEach(group => {
        const rows = group.getRows();
        const urgent = rows.some(row => {
            const data = row.getData()["Urgent"];
            const name = row.getData()["Preprint Title"];
            
            return Array.isArray(data) ? data.includes("Yes") || data.includes(true) : data === "Yes" || data === true;
        });

        const groupElement = group.getElement();
        if (urgent) {
            console.log(`Coloring group header for group ${group.getKey()}`);
            console.log("Group element before coloring:", groupElement);
            groupElement.style.backgroundColor = "rgba(255, 0, 0, 0.3)"; // Translucent red color
            console.log("Group element after coloring:", groupElement);
        }
        });
        }

        // Function to handle group header click events with basic logging
        function addGroupHeaderClickListener() {
            const groupHeaders = document.querySelectorAll('.tabulator-group-header');
            groupHeaders.forEach(header => {
            header.addEventListener('click', function() {
                console.log("Group header clicked:", header);
            });
            });
        }

        table.on("tableBuilt", function() {
        console.log("Table built");
        updateTableFilter(); // Call updateTableFilter after table is built
        preloadStatusFilter();
        colorUrgentGroupHeaders();
        highlightDuplicateDomains();
        addGroupHeaderClickListener(); // Add click listeners to group headers
        });

        table.on("dataFiltered", function() {
        console.log("Data filtered");
        colorUrgentGroupHeaders();
        highlightDuplicateDomains();
        });

        table.on("dataLoaded", function() {
        console.log("Data loaded");
        colorUrgentGroupHeaders();
        highlightDuplicateDomains();
        });

        table.on("dataChanged", function() {
        console.log("Data changed");
        colorUrgentGroupHeaders();
        highlightDuplicateDomains();
        });

table.on("cellEditing", async function(cell) {
    const fieldName = cell.getColumn().getField();
    if (cell.getColumn().getField() === "view" && cell.getColumn().getDefinition().formatter === viewButtonFormatter) {
        viewRowPopupFormatter(cell.getRow());  // Open the row view popup
        return;  // Bypass further checks
    }
    if (fieldName === "Taken") {
        // If the "Taken" cell is clicked, handle row claiming
        const canEdit = await claimAndEditRow(cell);
        console.log("can edit: " + canEdit);
        if (!canEdit) {
            cell.cancelEdit(); // Prevent editing if the row cannot be claimed
            return;
        }
    } else {
        // If any other cell is clicked, check if the row is claimed by the current user
        const row = cell.getRow();
        const currentData = row.getData();
        const userEmail = window['logged_in_user']['softr_user_email'];

        if (!currentData["Taken"] || currentData["Taken Email"] !== userEmail) {
            alert("You cannot edit this row because it is either not taken or taken by another user.");
            cell.cancelEdit(); // Prevent editing if the row is not claimed or claimed by another user
            return;
        }
    }

    // Proceed with the rest of the editing logic after confirming the row can be edited
    const row = cell.getRow();
    const recordId = row.getData().id;
    const latestData = await fetchRowData(recordId);

    let dataChanged = false;
    const columns = table.getColumnDefinitions();

    for (const column of columns) {
        const field = column.field;
        const editor = column.editor;
        if (editor && currentData[field] !== undefined) {
            const currentValue = currentData[field];
            const latestValue = latestData[field];
            if (typeof currentValue === 'object' || typeof latestValue === 'object') {
                if (JSON.stringify(currentValue) !== JSON.stringify(latestValue)) {
                    dataChanged = true;
                }
            } else if (currentValue !== latestValue) {
                dataChanged = true;
            }
        }
    }

    if (dataChanged) {
        row.update(latestData); // Refresh the row with the latest data
    }
});




        // Function to handle actions after a cell has been edited
table.on("cellEdited", async function(cell) {
    const row = cell.getRow();
    const fieldName = cell.getColumn().getField();
    const recordId = row.getData().id;
    const currentValue = cell.getValue();

    // Log the changes
    console.log(`Cell edited: Record Id: ${recordId}, Field: ${fieldName}, New Value: ${currentValue}`);

    // Update Airtable with the new value
    await updateAirtable(recordId, fieldName, currentValue);
    
});

        }).catch(error => {
            console.error('Error fetching data from Airtable:', error);
        });

                
        // Add event listeners to filter buttons
        document.querySelectorAll('.filter-button-domain').forEach(button => {
            button.addEventListener('click', function() {
                if (this.style.backgroundColor === 'rgb(78, 189, 210)') { // if already selected
                    this.style.backgroundColor = 'white'; // deselect
                    this.style.color = '#4ebdd2';
                    this.style.border = '2px solid #4ebdd2';
                } else {
                    this.style.backgroundColor = '#4ebdd2'; // select
                    this.style.color = 'white';
                    this.style.border = 'none';
                }
                updateTableFilter();
            });
        });
        // Select "ON HOLD" and "ACTIVE" buttons by default
        document.querySelectorAll('.filter-button-preprint-status[data-status="ON HOLD"], .filter-button-preprint-status[data-status="ACTIVE"]').forEach(button => {
            button.style.backgroundColor = '#4ebdd2';
            button.style.color = 'white';
            button.style.border = 'none';
            updateTableFilter();
        });


        document.querySelectorAll('.filter-button-preprint-status').forEach(button => {
            button.addEventListener('click', function() {
                if (this.style.backgroundColor === 'rgb(78, 189, 210)') { // if already selected
                    this.style.backgroundColor = 'white'; // deselect
                    this.style.color = '#4ebdd2';
                    this.style.border = '2px solid #4ebdd2';
                } else {
                    this.style.backgroundColor = '#4ebdd2'; // select
                    this.style.color = 'white';
                    this.style.border = 'none';
                }
                updateTableFilter();
            });
        });


        
        // Function to update the table filter based on selected buttons and user's email
        function updateTableFilter() {
            const selectedDomains = Array.from(document.querySelectorAll('.filter-button-domain'))
                .filter(button => button.style.backgroundColor === 'rgb(78, 189, 210)')
                .map(button => button.getAttribute('data-domain'));
        
            const selectedPreprintStatuses = Array.from(document.querySelectorAll('.filter-button-preprint-status'))
                .filter(button => button.style.backgroundColor === 'rgb(78, 189, 210)')
                .map(button => button.getAttribute('data-status'));
        
            if (table) { // Ensure table is defined
                table.clearFilter(true); // clear existing filters but retain header filters
        
                if (selectedDomains.length > 0) {
                    table.addFilter(function(data) {
                        const domains = data["Domain"];
                        if (Array.isArray(domains)) {
                            return domains.some(domain => selectedDomains.includes(domain));
                        }
                        return selectedDomains.includes(domains);
                    });
                }
        
                if (selectedPreprintStatuses.length > 0) {
                    table.addFilter(function(data) {
                        const preprintStatus = data["Preprint Status (from Preprint Info ONLY)"];
                        if (Array.isArray(preprintStatus)) {
                            return preprintStatus.some(status => selectedPreprintStatuses.includes(status));
                        }
                        return selectedPreprintStatuses.includes(preprintStatus);
                    });
                }
        
                // Add the filter for "Taken Email" - exclude rows where "Taken Email" is not empty
                // and it does not match the logged-in user's email
                // table.addFilter(function(data) {
                //     const takenEmail = data["Taken Email"];
                //     return !takenEmail || takenEmail === userEmail; // Show rows where "Taken Email" is empty or matches the current user's email
                // });
            }
        }




    </script>
</body>
</html>



