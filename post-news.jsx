import './newsapp.css';

const NewArticleForm = () => {
 

  return (
    <div className="layout-container">
      <main className="main-content">
        <div className="form-container">
          <div className="header-section">
            <h2 className="title">New Article</h2>
            <div className="button-group">
              <button className="publish-button">
                <span className="material-symbols-outlined">publish</span>
                <span className="truncate">Publish</span>
              </button>
            </div>
          </div>
          <form className="form-content">
            <div className="input-group">
              <label className="label" htmlFor="title">Title</label>
              <input 
                className="form-input" 
                id="title" 
                placeholder="Enter article title" 
              />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="author">Author</label>
              <input 
                className="form-input" 
                id="author" 
                placeholder="Enter author name" 
              />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="excerpt">Excerpt</label>
              <textarea 
                className="form-textarea" 
                id="excerpt" 
                placeholder="Write a brief excerpt of the article" 
              ></textarea>
            </div>
            <div className="input-group">
              <label className="label" htmlFor="content">Content</label>
              <textarea 
                className="form-textarea large" 
                id="content" 
                placeholder="Write the full article content" 
              ></textarea>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default NewArticleForm;
