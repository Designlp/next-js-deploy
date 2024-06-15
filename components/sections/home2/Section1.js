

// import Spline from '@splinetool/react-spline/next';

export default function Section1() {
    return (
        <>
            <section className="section-box">
                <div className='container-spline'>
                {/* <Spline
        scene="https://prod.spline.design/ZgdSd1EG3vLDL3gn/scene.splinecode" 
      /> */}
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.6.8/build/spline-viewer.js"></script>
      <spline-viewer loading-anim-type="spinner-big-light" url="https://prod.spline.design/ZgdSd1EG3vLDL3gn/scene.splinecode"></spline-viewer>
                </div>
            </section>
        </>
    )
}
