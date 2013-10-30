exports.index = function (req, res) {
    res.render('index',
        {
            debug: true,
            company: {
                title: 'Дезинфект Сливен',
                name: '<<Company name here',
                company_slogan : 'Борба с гризачи и насекоми. Ефикасно премахване на хребарки, бълхи, кърлежи, мухи, мишки, плъхове',
                company_description: 'Високо качество. Работи с висококачествени и ефикасни препарати (BASF, Gingenta). Безплатен оглед и консулация на обекти. 20 години опит с доволни клиенти и безупречни услуги'
            }
        }
    );
};