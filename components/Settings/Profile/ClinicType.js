import React from 'react'

const ClinicType = () => {
    return (
        <div>
            <div className="uk-margin-top uk-grid-small uk-child-width-auto Group" uk-grid="">


                <div>
                    <div>
                        <input type="radio" id="gen" name="hospital_type" value="General Practice" />
                        <label htmlFor="gen">
                            <span className="uk-button uk-text-capitalize uk-button-default uk-button-small">General Practice</span>
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="radio" id="emergency" name="hospital_type" value="Hospital Emergency" />
                        <label htmlFor="emergency">
                            <span className="uk-button uk-text-capitalize uk-button-default uk-button-small">Hospital Emergency</span>
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="radio" id="COVID" name="hospital_type" value="COVID 19 Clinic" />
                        <label htmlFor="COVID">
                            <span className="uk-button uk-text-capitalize uk-button-default uk-button-small">COVID 19 Clinic</span>
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="radio" id="Specialist" name="hospital_type" value="Specialist" defaultChecked />
                        <label htmlFor="Specialist">
                            <span className="uk-button uk-text-capitalize uk-button-default uk-button-small">Specialist</span>
                        </label>

                    </div>
                </div>

                <div>
                    <div>
                        <input type="radio" id="alied_health" name="hospital_type" value="Alied health" />
                        <label htmlFor="alied_health">
                            <span className="uk-button uk-text-capitalize uk-button-default uk-button-small">
                                Alied health
            </span>
                        </label>
                    </div>
                </div>
            </div>

            <style jsx>{`

                .Group input{
                    display:none;
                } 

            .Group input[type=radio]:checked+label>.uk-button{
                background-color: #1e87f0;
                color: #fff;
                border: 1px solid transparent;
            }
            `}</style>
        </div>
    )
}

export default ClinicType
