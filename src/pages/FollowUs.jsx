import './followus.css'
function FollowUs() {
    return (
        <>
            {/* Start our last post */}
            <section class="news-section">
        <div class="header">
            <h2><span class="theme_color">Follow</span> Us</h2>
            <h3>Find here our latest Post.</h3>
        </div>
        <div class="auto-container">
            <div class="column">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcadhirajostwal%2F&tabs=timeline&width=520&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="500"></iframe>
            </div>
            <div class="column">
                <iframe src="https://www.instagram.com/cadhirajostwal/embed/" width="100%" height="500"></iframe>
            </div>
        </div>
    </section>
            {/* end our last post */}</>
    )
}
export default FollowUs;