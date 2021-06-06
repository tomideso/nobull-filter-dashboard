import React, { useContext } from "react";
import CollectionList from "./CollectionList";
import GroupListView from "./GroupListView";
import { CollectionContext } from "components/context/Collection";
import Link from "next/link";

const Setup = ({}) => {
  const { prevStep, setstep, savedResult, activeFilterIdx } = useContext(
    CollectionContext
  );

  console.log(savedResult);

  return (
    <>
      <div className="uk-padding-small uk-background-secondary">
        <ol>
          <li>
            <div>
              <button className="uk-button uk-button-primary ">
                Copy to clipboard
              </button>
              <div className="uk-padding-small  uk-width-3-4@m tm-border-primary tm-text-white uk-text-small">
                {`
                  <script src="http://${window.location.host}/libary.js"></script>
                  <script src="http://${window.location.hostname}:8000/v1/filter/${savedResult._id}"></script>
                `}
              </div>
            </div>
          </li>

          <li>
            <div className="">
              <h4 className="uk-text-warning">
                Paste it before {`</body>`} tag
              </h4>

              <div
                className="uk-grid uk-grid-stack uk-grid-small uk-child-width-auto@m "
                uk-grid="">
                <div>
                  <div>if you need to use the filter across the site</div>
                  <a className="uk-link uk-text-bold">project settings</a>
                </div>
                <div>
                  <div>if you need to use the filter on a single page</div>
                  <a className="uk-link uk-text-bold">particular page</a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="">
              <h4 className="uk-text-warning">
                Save and publish Webflow site!
                <div className="uk-text-muted uk-text-small">
                  Filter will work only on published site.
                </div>
              </h4>
              <div className="uk-grid-small uk-child-width-1-2-@m uk-grid uk-grid-stack"></div>
            </div>
          </li>

          <li>
            <div className="">
              <h4 className="uk-text-warning">
                Add the Nobull Collection Item Embed
                <div className="uk-text-muted uk-text-small">
                  Add the below code in an Embed element directly in your
                  collection item.
                </div>
              </h4>
              <div className="uk-padding-small  uk-width-3-4@m tm-border-primary tm-text-white uk-text-small">
                {`<input type="hidden" class="nobull-list-item" value="{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}">`}
              </div>
            </div>
          </li>

          <li>
            <CollectionList activeFilterIdx={activeFilterIdx} />
          </li>

          <li>
            <div className="">
              <div>
                <h4 className="uk-text-warning uk-display-inline">
                  Add data-attributes attributes to filter groups and filter
                  elements
                </h4>{" "}
                <i
                  className="fa fa-question-circle fa-lg tm-cursor-pointer uk-text-primary"
                  aria-hidden="true"></i>
              </div>
              <div className="uk-width-3-4@m">
                <GroupListView />
              </div>
            </div>
          </li>

          <li>
            <div className="">
              <div>
                <h4 className="uk-text-warning uk-margin-remove">
                  Define class for active state of a filter element
                </h4>
                <div className="uk-text-small">
                  Add the class below to a filter element and style it as you
                  want. It should clearly identify element as an active state.
                </div>
              </div>

              <div className="tm-width-fit tm-background-black uk-flex uk-flex-between tiny-padding">
                <span className="tm-text-white uk-margin-large-right">
                  {" "}
                  &nbsp;filter-collection
                </span>
                <div className="uk-text-bold uk-button uk-button-primary uk-button-small">
                  <span
                    className="uk-icon"
                    uk-icon="icon: copy; ratio: .8"></span>
                  <span> Copy</span>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="">
              <h4 className="uk-text-warning">Publish your webflow site</h4>
              <div className="uk-grid uk-grid-stack uk-grid-small uk-child-width-1-2">
                <div>
                  <Link href="/">
                    <a className="uk-text-small">Forgot Password?</a>
                  </Link>

                  <Link href="/">
                    <a className="uk-button uk-button-success uk-button-large uk-width-large">
                      Publish
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <style jsx>{`
        ol li {
          counter-increment: list;
          list-style-type: none;
          position: relative;
          padding-bottom: 20px;
        }
        ol li:before {
          color: #faa05a !important;
          content: counter(list) ".";
          left: -32px;
          position: absolute;
          text-align: right;
          width: 26px;
          font-size: 1.25rem;
          line-height: 1.3;
        }

        .tm-border-primary {
          border: 1px solid #1e87f0 !important;
        }

        .tm-min-width-medium {
          min-width: 300px;
        }

        .tm-width-fit {
          width: fit-content;
        }

        .tiny-padding {
          padding: 5px;
        }
      `}</style>
    </>
  );
};

export default Setup;
