import React from 'react';

const SearchContainer = () => {
    return (
        <div className="background-image">
            <div className="search-container">
                <div className="search-box">
                    <input type="text" placeholder="Search About Technicans and Services" />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="flex-container">
                <select className="custom-select">
                    <option value="" selected disabled>
                        --Select a city--
                    </option>
                    <option value="Amman">Amman</option>
                    <option value="Tafilah">Tafilah</option>
                    <option value="Aqaba">Aqaba</option>
                    <option value="Ma'an">Ma'an</option>
                    <option value="Karak">Karak</option>
                    <option value="Zarqa">Zarqa</option>
                    <option value="Irbid">Irbid</option>
                    <option value="Mafraq">Mafraq</option>
                    <option value="Ajloun">Ajloun</option>
                    <option value="Madaba">Madaba</option>
                    <option value="Salt">Salt</option>
                    <option value="Jerash">Jerash</option>
                </select>

                <div>
                    <select className="custom-select">
                        <option value="">Technicians Category</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;
