function Perks({ selected, onChange }) {
  const handleOnChange = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  };

  return (
    <>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="wifi" onChange={handleOnChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
          />
        </svg>
        <span>Wi-Fi</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="tv" onChange={handleOnChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <span>TV</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="pets" onChange={handleOnChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z" />
          <path d="M4.42 11.247A13.152 13.152 0 004 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0112 5c.78 0 1.5.108 2.161.306" />
        </svg>
        <span>Pets</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="parking" onChange={handleOnChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
        <span>Parking spot</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="washer" onChange={handleOnChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="M4 22h16a1 1 0 001-1V5c0-1.654-1.346-3-3-3H6C4.346 2 3 3.346 3 5v16a1 1 0 001 1zM18 3.924a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zM12 7c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
          <path d="M12.766 16.929c1.399-.261 2.571-1.315 3.023-2.665a3.853 3.853 0 00-.153-2.893.482.482 0 00-.544-.266c-.604.149-1.019.448-1.5.801-.786.577-1.765 1.294-3.592 1.294-.813 0-1.45-.146-1.984-.354l-.013.009a4.006 4.006 0 004.763 4.074z" />
        </svg>
        <span>Washer</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="kitchen" onChange={handleOnChange} />
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 106 0V4" />
        </svg>
        <span>Kitchen</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="longStay" onChange={handleOnChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
        </svg>
        <span>Long term stays allowed</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="hairDryer" onChange={handleOnChange} />
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M10 12.73A70.39 70.39 0 0017 11V4s-6.5-2-9.5-2a5.5 5.5 0 00-1.38 10.82L7 19h1a3 3 0 001.46 2.33A3.15 3.15 0 0111 24h1a4.12 4.12 0 00-1.91-3.45C9.39 20 9 19.63 9 19h1M4 7.5A3.5 3.5 0 017.5 4 37.08 37.08 0 0115 5.5v4A37.08 37.08 0 017.5 11 3.5 3.5 0 014 7.5M22 9a4.32 4.32 0 01-2.22-.55A3.4 3.4 0 0018 8V7a4.32 4.32 0 012.22.55A3.4 3.4 0 0022 8m0-2a3.4 3.4 0 01-1.78-.45A4.32 4.32 0 0018 5v1a3.4 3.4 0 011.78.45A4.32 4.32 0 0022 7m0 3a3.4 3.4 0 01-1.78-.45A4.32 4.32 0 0018 9v1a3.4 3.4 0 011.78.45A4.32 4.32 0 0022 11M9 7.5A1.5 1.5 0 117.5 6 1.5 1.5 0 019 7.5z" />
        </svg>
        <span>Hair dryer</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input type="checkbox" name="ac" onChange={handleOnChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="M8 16a.5.5 0 01-.5-.5v-1.293l-.646.647a.5.5 0 01-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 11-.966-.26l.237-.882-1.12.646a.5.5 0 01-.5-.866l1.12-.646-.884-.237a.5.5 0 11.26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 01-.258-.966l.883-.237-1.12-.646a.5.5 0 11.5-.866l1.12.646-.237-.883a.5.5 0 11.966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 11.707-.708l.646.647V.5a.5.5 0 111 0v1.293l.647-.647a.5.5 0 11.707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 11.966.26l-.236.882 1.12-.646a.5.5 0 01.5.866l-1.12.646.883.237a.5.5 0 11-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 01.259.966l-.883.237 1.12.646a.5.5 0 01-.5.866l-1.12-.646.236.883a.5.5 0 11-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 01-.707.708l-.647-.647V15.5a.5.5 0 01-.5.5z" />
        </svg>
        <span>AC</span>
      </label>
      <label className="flex border rounded-xl gap-2 items-center p-4">
        <input
          type="checkbox"
          name="privateEnterance"
          onChange={handleOnChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.5 1a.5.5 0 000 1H12v11H4.5a.5.5 0 000 1H12a1 1 0 001-1V2a1 1 0 00-1-1H4.5zm2.104 3.896a.5.5 0 10-.708.708L7.293 7H.5a.5.5 0 000 1h6.793L5.896 9.396a.5.5 0 00.708.708l2.25-2.25a.5.5 0 000-.708l-2.25-2.25z"
            clipRule="evenodd"
          />
        </svg>
        <span>Private entrance</span>
      </label>
    </>
  );
}

export default Perks;
