import React from "react";
import "./styles.css";

/**
 * Define Regions, a React component of Lab9. The model
 * data for this view (the regions names) is available at
 * window.regionsModel.regionsModel().
 */
class Regions extends React.Component {
    constructor(props) {
        super(props);
        console.log(
            "window.lab9models.regionsModel()",
            window.lab9models.regionsModel()
        );
        this.state={substr : "", regions: window.lab9models.regionsModel()};


        this.handleChangeSubstr = (event) => this.handleChange(event);
    }

    handleChange(event) {
        const substr = event.target.value;
        const substrlower = substr.toLowerCase();
        const regions = window.lab9models.regionsModel().filter(region =>
            region.toLowerCase().includes(substrlower)
        ).sort();

        this.setState({ substr, regions });
    }

    render() {
        return (
            <div>
                <div className="state-search">
                    {
                        this.state.substr
                    }
                </div>
                <div className="lab9-example-output">
                <span id='IInfo'>
                {
                   this.state.regions.length > 0 ? this.state.regions.join(', ') : "No medicines found"
                }
                </span>
                </div>
                <label htmlFor="substrId">Enter substring to search:</label>
                <input
                    id="substrId"
                    type="text"
                    value={this.state.substr}
                    onChange={this.handleChangeSubstr}
                />

            </div>
        );
    }
}

export default Regions;
