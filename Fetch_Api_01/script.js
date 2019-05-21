console.log("Sanity Check")

//call the function
getData();

async function getData() {
    //fetch's the data and assigns it to response
    const response = await fetch('ZonAnn.Ts+dSST.csv');

    // console.log(response);
    const data = await response.text();

    // backslash n, is for a line break
    //we use slice because we don't need the first row, just the data
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        // console.log(element);
        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[1];

        // console.log(row);
        console.log(year,temp);
    });
};

/*
Getting the raw data as text.
Then splitting it up and putting it into a variable called table.
Splitting it up in its own row.
Going through each row of the table, and splitting it up by column.
and splitting it into its own column

*/