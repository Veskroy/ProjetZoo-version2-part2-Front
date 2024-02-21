import '/public/assets/styles/loading.css'

export default function Loading() {
    return (
        <div className="loader-container">
            <div>
                <div className="pl2">
                    <div className="pl2__a"></div>
                    <div className="pl2__b"></div>
                    <div className="pl2__c"></div>
                </div>
                <div className="loader">Loading...</div>
            </div>
        </div>
    );
}
