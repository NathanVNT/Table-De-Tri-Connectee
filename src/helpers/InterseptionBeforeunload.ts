export default class InterseptionBeforeunload {
    // Fonction de gestionnaire d'événement beforeunload
    static handleBeforeUnload = (event: BeforeUnloadEvent) => {
        event.preventDefault()
    }

    static overrideBeforeunload() {
        // Ajouter l'événement beforeunload
        window.addEventListener('beforeunload', this.handleBeforeUnload);
        // Nettoyer le gestionnaire d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('beforeunload', this.handleBeforeUnload)
        }
    }

}

