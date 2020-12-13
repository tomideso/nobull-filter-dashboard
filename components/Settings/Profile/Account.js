import React from 'react'

const Account = () => {
    return (
        <div className="uk-margin-top uk-width-large">
            <div className={"uk-child-width-1-3 uk-text-left uk-grid-small"} uk-grid={1}>

                <div>
                    <span className="uk-text-primary">First Name:</span>
                </div>
                <div>
                    <span>Dushyant Singh</span>
                </div>
                <div>
                    <a className="uk-text-primary" uk-icon="icon: pencil;"></a>
                </div>
            </div>

            <div className={"uk-child-width-1-3 uk-text-left uk-grid-small"} uk-grid={1}>

                <div>
                    <span className="uk-text-primary">last Name:</span>
                </div>
                <div>
                    <span>Dushyant Singh</span>
                </div>
                <div>
                    <a className="uk-text-primary" uk-icon="icon: pencil;"></a>
                </div>
            </div>

            <div className={"uk-child-width-1-3 uk-text-left uk-grid-small"} uk-grid={1}>

                <div>
                    <span className="uk-text-primary">Email:</span>
                </div>
                <div>
                    <span>abc@xysds.com</span>
                </div>
                <div>
                    <a className="uk-text-primary" uk-icon="icon: pencil;"></a>
                </div>
            </div>

            <div className={"uk-child-width-1-3 uk-text-left uk-grid-small"} uk-grid={1}>

                <div>
                    <span className="uk-text-primary">Password:</span>
                </div>
                <div>
                    <span>*********</span>
                </div>
                <div>
                    <a className="uk-text-primary" uk-icon="icon: pencil;"></a>
                </div>
            </div>

            <div className={"uk-child-width-1-3 uk-text-left uk-grid-small"} uk-grid={1}>

                <div>
                    <span className="uk-text-primary">Timezone:</span>
                </div>
                <div>
                    <span>Australia/Brisbane</span>
                </div>
                <div>
                    <a className="uk-text-primary" uk-icon="icon: pencil;"></a>
                </div>
            </div>
        </div>
    )
}

export default Account
