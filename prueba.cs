  ngOnInit(): void {

        this.releaseNews = this.releaseNews.map((release) => {
            release['disabled'] = false;
            // Convertir la cadena a un objeto Date
            const dateObject = new Date(release.creationDate);
            // Formatear la fecha en formato JUL-2023
            release.creationDate = formatDate(dateObject, 'MMM-yyyy', 'en');
            return release;
