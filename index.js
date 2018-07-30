/**************** D A T A   L O A D I N G  ****************/

var navigationlinks = [
    {   link: 'article/le_club_oeno',             
        title: 'Le club Oeno'
    },
    {   link: 'article/les_pays_producteurs',
        title: 'Les pays producteurs de vin'
    },
    {   link: 'article/les_regions_francaises',
        title: 'Les régions françaises'
    },
    {   link: 'page/les_cepages.html',                 
        title: 'Les cépages'
    },
    {   link: 'article/la_vinification', 
        title: 'La vinification'
    },
    {   link: 'article/l_oenologie',              
        title: 'L\'oenologie'
    }
];

var lastarticles=[
    {
        title : 'Fusce facilisis tempus magna ac dignissim 1',
        link : 'link6',
        publisheddate : '12th August 2018', 
        text : 'Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst. Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo', 
        img : 'https://picsum.photos/800/300/?random=1',
        readingtime : '8 minutes'
    }, 
    {
        title : 'Titre génial de l\'article 2' ,
        link : 'link7',
        publisheddate : '12th August 2018', 
        text : 'du text balbalbal balbalba lbalba ba et x. et pis encore du text', 
        img : 'https://picsum.photos/800/300/?random=2',
        readingtime : '1 minutes' 
    }, 
    {
        title : 'Fusce facilisis tempus magna ac dignissim 3',
        link : 'link8',
        publisheddate : '12th August 2018', 
        text : 'Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst. Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo', 
        img : 'https://picsum.photos/800/300/?random=3',
        readingtime : '2 minutes'  
    }, 
    {
        title : 'Fusce facilisis tempus magna ac dignissim 4',
        link : 'link9',
        publisheddate : '12th August 2018', 
        text : 'Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst. Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo', 
        img : 'https://picsum.photos/800/300/?random=4',
        readingtime : '3 minutes' 
    }, 
    {
        title : 'Fusce facilisis tempus magna ac dignissim 5',
        link : 'link10',
        publisheddate : '12th August 2018', 
        text : 'Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst. Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo', 
        img : 'https://picsum.photos/800/300/?random=5',
        readingtime : '4 minutes'  
    }
];

writers = [
    {
        title : 'Romain Chapon',
        pseudo : 'LeChaps', 
        text : 'Quoi qu\'il arrive, qui que vous soyez, où que vous buviez, quoi que vous goutiez : On en boira toujours du plus mauvais!',
        img : 'https://picsum.photos/100/100/?random=6',
    }, 
    {
        title : 'Philippe Domerc',
        pseudo : 'Phil', 
        text : 'Laisser moi calculer...', 
        img : 'https://picsum.photos/100/100/?random=7',
    }
];

/**************** C O M P O N E N T   A C T I V A T I O N ****************/
new Vue(
    { el: '#headerId' }
);

new Vue(
    { el: '#footerId' }
);

new Vue(
    { el: '#heroarticleId', 
    data: {
        article: {
            img : `https://picsum.photos/1300/500/?image=674`, 
            title : `Bienvenue sur Club Oeno`, 
            subtitle : `Le site référence pour les amoureux de l'oenologie` 
        }
    }
});

new Vue({
    el: '#navigationId', 
    data: {
        navlinks: navigationlinks
    }
});

new Vue({
    el: '#featuredarticleId',
    data () {
       return {
           articles: null,
           loading: true,
           errored: false
        }
    },
    mounted () {
        axios
        .get('http://api.cluboeno.com/index.php' )
        .then(response => (
            this.articles = response.data.featuredarticles)
        )
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
});

new Vue({
    el: '#contentindexId',
    data:  { 
        articles : lastarticles, 
        writers : writers
    }
});

new Vue({
    el: '#offcanvasId', 
    data: {
        navlinks: navigationlinks
    }
})