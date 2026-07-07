new DataTable('#example', {
    responsive: true,
    layout: {
        topStart: {
       
    buttons: [
        {
            extend: 'copy',
            text:'نسخ'

        },{
            extend: 'excel',
            text:'إكسل'

        },{
            extend: 'pdf',
             text:'ملف'

        },{
            extend: 'print',
             text:'طباعة'

        },
       
    ]
    }
    }
});