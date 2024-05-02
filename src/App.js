
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { REGISTER, ADD_STORY, EDIT_STORY, LOGIN } from "./constants";
import { loadUser } from "./components/auth/authAPI";

import Home from "./pages/Home.js";
import Bookmarks from "./pages/Bookmarks.js";
import Loader from "./components/common/Loader/Loader.js";
import UserStories from "./pages/UserStories.js";
import Auth from "./components/auth/Auth.js";
import Navbar from "./components/common/Navbar/Navbar.js";
import Modal from "./components/common/Modal/Modal.js";
import NotFound from "./components/common/NotFound/Notfound.js";
import AddStory from "./components/story/StoryForm/StoryAdd.js";
import EditStory from "./components/story/StoryForm/StoryEdit.js";
import ViewStory from "./components/story/StoryDetail/StoryDetail.js";


const App = () => {
  const dispatch = useDispatch();
  const { modalContent } = useSelector((state) => state.modal);
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Navbar />

      {modalContent === REGISTER && (
        <Modal>
          <Auth />
        </Modal>
      )}
      {modalContent === LOGIN && (
        <Modal>
          <Auth />
        </Modal>
      )}
      {modalContent === ADD_STORY && (
        <Modal>
          <AddStory />
        </Modal>
      )}
      {modalContent === EDIT_STORY && (
        <Modal>
          <EditStory />
        </Modal>
      )}

      <ToastContainer></ToastContainer>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/story/:id"
          element={
            <Modal>
              <ViewStory />
            </Modal>
          }
        />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/my/stories" element={<UserStories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;