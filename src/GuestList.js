import React from 'react';
import PropTypes from 'prop-types';

const GuestList = props => 
    <ul>
        {props.guests.map((guest, index) =>
            <li key={index}>
                <span>{guest.name}</span>
                <label>
                    <input type="checkbox" checked={guest.isConfirmed} /> isConfirmed
                </label>
                <button>edit</button>
                <button>remove</button>
            </li>
        )}
    </ul>;
            <Guest 
            key={index} 
            name={guest.name} 
            isConfirmed={guest.isConfirmed}
            handleConfirmation={() => props.toggleConfirmationAt(index)} />
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired
};

export default GuestList;