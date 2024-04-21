import React, { useContext, useEffect, useRef, useState } from 'react'
import '../SearchWorkPage/SearchWork.scss'
import { BiSearchAlt, BiSolidInfoCircle } from 'react-icons/bi'
import SearchWorkCategories from '../../Modals/SearchWorkCategories';
import { SearchWorkContext } from '../../Contexts/SearchWorkContext';

const SearchWork = () => {

     const { selectedValueAltCategory, trimValue, setSelectedValueAltCategory } = useContext(SearchWorkContext);
     const [filterBoxOpen, setFilterBoxOpen] = useState(false);
     const filterBoxRef = useRef(null);
     const filterRef = useRef(null);
     const [selectedValue, setSelectedValue] = useState("");
     const [selectedValue2, setSelectedValue2] = useState("");
     const [openCategory, setOpenCategory] = useState(false);
     const toggleCategory = () => {
      setOpenCategory(!openCategory)
     }

     const toggleFilter = () => {
      setFilterBoxOpen(!filterBoxOpen)
     }
  //kenara click ederken menu baglanmasi (handle outside click) 
     useEffect(() => {
      const handleOutsideClick = (e) => {
        if (filterRef.current && filterBoxRef.current && !filterBoxRef.current.contains(e.target)) {
          setFilterBoxOpen(false);
          filterRef.current.style.border = '1px solid #cececea8'
        } else {
          filterRef.current.style.border = '1px solid #696969'
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
      
     }, []);

  //selected value options
     useEffect(() => {
     }, [selectedValue, selectedValue2])

     



  return (
    <div className='not-logged-searchwork'>
      <div className='container-searchwork'>
        <header className='header-searchwork'>
          <article className='warningMsg'>
          <p>
           <BiSolidInfoCircle
           size={18}
           /> Sayt yeni olduğu üçün axtarış nəticələri biraz axsaya bilər.
            İşəgötürənlər çoxaldıqca işlər də artacaq.
          </p>
          </article>
          <header className='header-content'>
            <div className='categories' onClick={toggleCategory}>
            <span style={{letterSpacing: '-0.4px'}}>{selectedValueAltCategory ? trimValue : "Kateqoriya"}</span>
            <i className={openCategory ? "bi bi-view-list" : "bi bi-list-stars"} id='listIcon' style={{fontSize: '20px'}}/>
            </div>
            {openCategory && (
              <SearchWorkCategories />
            )}
            <article className='input-area'>
            <BiSearchAlt style={{position: 'absolute',left: '0.5rem'}}/>
            <input type='search' value={selectedValueAltCategory} 
            onChange={(e) => {setSelectedValueAltCategory(e.target.value)}}
            placeholder="sənə uyğun iş tap.."/>
            </article>

            <article className='filter' onClick={toggleFilter} ref={filterRef}>
            <i className="bi bi-filter-circle" style={{fontSize: '22px', color: '#717171'}}/>
            <h6 style={{fontSize: '13px', fontFamily: 'monospace'}}>Filter</h6>
            </article>
            {filterBoxOpen && (
              <section className='filter-box' ref={filterBoxRef}>
               <select className='filter1' value={selectedValue} onChange={(e) => {setSelectedValue(e.target.value)}}>
                <option>İş növü</option>
                <option value='Remote'>Remote</option>
                <option value='Ofis'>Ofis</option>
                <option value='Hybrid'>Hybrid</option>
               </select>

               <select className='filter2' value={selectedValue2} onChange={(e) => {setSelectedValue2(e.target.value)}}>
                <option>Yerləşdirilmə tarixi</option>
                <option>Ən təzə</option>
                <option>Ən köhnə</option>
                <option>Bu ay</option>
                <option>Bu il</option>
                <option>Bu gün</option>
               </select>

               <button
               id='saveBtn'
               >Yadda saxla</button>
               <button
               id='resetBtn'
               >Sıfırla</button>

              </section>
            )}
            <div className='search' style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
              <BiSearchAlt style={{position: 'absolute', left: '0.5rem'}}/>
            <button id='searchBtn'>Axtar</button>
            </div>
          </header>
        </header>
      </div>
    </div>
  )
}

export default SearchWork