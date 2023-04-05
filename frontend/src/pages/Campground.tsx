function Campground() {
  return (
    <main className="flex-1 flex">
      <section className="grid grid-cols-5 flex-1">
        <div className="p-4 flex">
          <section className="flex-1 border-r-[1px] border-solid border-gray-200 ">
            <div className="p-5">
              <h1 className="font-[800] text-sm mb-4">Filter</h1>
              <h1 className="font-[800] text-sm mb-2">Location</h1>
              <div className="form-control w-full">
                <select name="" id="" className="select select-sm">
                  <option value="">kk</option>
                </select>
              </div>
              <h1 className="font-[800] text-sm mb-2">Price Range</h1>
              <div className="form-control w-full">
                <input
                  type="range"
                  name=""
                  id=""
                  min="0"
                  max="25000"
                  className="range range-primary range-xs"
                  step="5000"
                />

                <div className="w-full flex justify-between text-xs px-2 text-cente">
                  <span>0</span>
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                </div>
              </div>

              <div className="form-control w-full">
                <h1 className="font-[800] text-sm mb-2">Reviews</h1>
                <div className="rating-group flex m-auto">
                  <input
                    disabled
                    checked
                    className="rating__input rating__input--none"
                    name="rating3"
                    id="rating3-none"
                    value="0"
                    type="radio"
                  />
                  <label aria-label="1 star" className="rating__label" htmlFor="rating3-1">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-1"
                    value="1"
                    type="radio"
                  />
                  <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-2"
                    value="2"
                    type="radio"
                  />
                  <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-3"
                    value="3"
                    type="radio"
                  />
                  <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-4"
                    value="4"
                    type="radio"
                  />
                  <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-5"
                    value="5"
                    type="radio"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-4 p-4">2</div>
      </section>
    </main>
  );
}
export default Campground;
