declare module '@sasmeee/igdl' {
    interface InstagramData {
        thumbnail_link: string;
        download_link: string;
    }

    function instagramDl(url: string): Promise<InstagramData>;

    export = instagramDl;
}
