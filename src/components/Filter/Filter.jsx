import React from 'react';
import './Filter.css'

function Filter({filterList, filter, setFilter}) {
    const isAllChecked = filter.length === filterList.length;

    function checkboxHendler(e) {
        const isSelected = e.target.checked;
        const value = parseInt(e.target.value);

        if(isSelected) {
            setFilter((prev) => [...prev, value]);
        } else {
            setFilter((prev) => {
                return prev.filter((prevValue) => {
                    return prevValue !== value;
                })
            })
        };
    }

    function checkAllHendler() {
        const values = filterList.map(stop => stop.value);
        isAllChecked ? setFilter([]) : setFilter(values);
    };

    return ( 
        <div className='filter'>
            <h3 className="filter__title">Количетсво пересадок</h3>

            <div className="filter__wrapper">
                <div key={stop.id} className='filter__item'>
                    <input 
                        type="checkbox"
                        id='All'
                        value='All'
                        checked={isAllChecked}
                        onChange={checkAllHendler}
                    />
                    <label htmlFor='All'>Выбрать все</label>
                </div>

                {filterList && filterList.map((stop) => {
                    return (
                        <div key={stop.id} className='filter__item'>
                            <input 
                                type="checkbox"
                                id={stop.id} 
                                value={stop.value} 
                                onChange={checkboxHendler}
                                checked={filter.includes(stop.value)}
                            />
                            <label htmlFor={stop.id}>{stop.label}</label>
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
}

export default Filter;