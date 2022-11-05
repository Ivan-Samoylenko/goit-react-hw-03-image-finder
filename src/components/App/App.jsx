import { Component } from 'react';
import { fetchImages } from 'services';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    status: 'idle',
    isNeededLoadMoreBtn: false,
  };

  componentDidUpdate(_, prevState) {
    const isNeedToUpdate =
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page;

    if (isNeedToUpdate) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    this.setState({
      status: 'pending',
    });

    try {
      const data = await fetchImages(query, page);
      const isNeededLoadMoreBtn =
        data.totalHits > this.state.images.length + 12;

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        status: 'resolved',
        isNeededLoadMoreBtn,
      }));

      if (data.hits.length === 0) {
        toast.info(
          `Nothing found for your query: "${query}", try searching for another matches.`
        );
      }
    } catch {
      this.setState({ status: 'rejected' });
      toast.error('Something went wrong. Try reloading the page');
    }
  };

  handleSubmit = value => {
    this.setState(() => ({
      query: value,
      page: 1,
      images: [],
    }));
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status, isNeededLoadMoreBtn } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />

        {images.length > 0 && <ImageGallery images={images} />}

        {status === 'pending' && <Loader />}

        {isNeededLoadMoreBtn && status === 'resolved' && (
          <Button onClick={this.handleLoadMoreClick}>Load more</Button>
        )}

        <ToastContainer
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={true}
          theme="colored"
        />
      </Container>
    );
  }
}
