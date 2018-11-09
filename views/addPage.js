const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label class="col-sm-2 control-label">Author Name</label>
        <div class="col-sm-10">
          <input id="name" name="name" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label">Author Email</label>
        <div class="col-sm-10">
          <input id="email" name="email" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div>
        <label class="col-sm-2 control-label">Content</label>
        <div class="col-sm-10">
          <textarea
            id="content"
            name="content"
            type="textarea"
            rows="4"
            class="col-sm-12"
          ></textarea>
        </div>
      </div>

      <div>
        <label>Status</label>
        <select id="status" name="status">
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
