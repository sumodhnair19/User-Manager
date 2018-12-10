import React from 'react';
import LoaderGifIcon from '../Assets/Images/loader.gif';

const Loader = (props) => {
        return(
            <div className="loader">
              <span className="no-result-image">
                <img  src={LoaderGifIcon} alt="loader"/>
              </span>
          </div>
        )
}

export default Loader;
