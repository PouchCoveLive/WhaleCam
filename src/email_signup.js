function email_subscriber(){
    const createCsvWriter = require('csv-writer').createObjectCsvWriter
    const csvWriter = createCsvWriter({
        path: 'viewport_email_notification_list.csv',
        header: [
            {id: 'email', title: 'Email'},
        ]
    });

    const data = [
        {
            email: 'email@mun.ca'
        }
    ];

    const data2 = [
        {
            email: 'email2@mun.ca'
        }
    ];

    csvWriter
        .writeRecords(data)
        .then(()=> console.log('CSV SUCCESS'));

    csvWriter
        .writeRecords(data2)
        .then(()=> console.log('CSV SUCCESS AGAIN'));
}

email_subscriber()
