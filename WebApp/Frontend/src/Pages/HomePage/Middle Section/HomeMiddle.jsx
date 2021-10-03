import Button from '@material-ui/core/Button';


function HomeMiddle() {
    return (
        <div className="heroSection">
            <div className="row align-items-center justify-content-center">
                <div className="textSection">
                    <p className="justify-content-center pStyle">
                        Get your all house needs with <div className="offStyle">35% off</div> Order online - Stay Safe.
                    </p>
                    <Button className="contactButton" variant="contained" size="large">Log Now</Button>
                </div>
            </div>
        </div>
    );
}

export default HomeMiddle;