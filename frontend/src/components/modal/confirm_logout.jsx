return (
    <div id="logout-confirmation">
      <h2>are you sure you want to logout?</h2>
      <p>
        if you still want to continue, please click the button
      </p>
      <form onSubmit={handleSubmit}>
        <input value={titleInput}
               onChange={handleChange} />
        <button disabled={disabled} >
          DELETE
        </button>
      </form>
    </div>
  );