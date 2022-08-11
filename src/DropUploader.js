import React from 'react';
import PropTypes from 'prop-types';
import DropzoneComponent from 'react-dropzone-component';

const componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: true,
  postUrl: 'https://honeysuckle-snowstorm.glitch.me/uploadHandler',
};

const djsConfig = {
  addRemoveLinks: true,
};

class DropUploader extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    initialMedia: PropTypes.array,
    // eslint-disable-next-line react/no-typos
    onUpload: PropTypes.function,
    // eslint-disable-next-line react/no-typos
    onRemove: PropTypes.function,
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    initialMedia: [],
    onUpload: () => {},
    onRemove: () => {},
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    media: [],
  };

  componentDidMount() {
    // Check initialMedia if there is any copy from props to state
    const { initialMedia } = this.props;
    if (initialMedia.length > 0) {
      this.setState({ media: initialMedia });
    }
  }

  render() {
    return (
      <DropzoneComponent
        config={componentConfig}
        eventHandlers={{
          success: (file) => {
            // Get server response
            const res = JSON.parse(file.xhr.responseText);
            let { media } = this.state;
            media = [...media, res.data];
            // eslint-disable-next-line react/destructuring-assignment
            this.setState({ media }, () => this.props.onUpload(res.data));
          },
          removedfile: (file) => {
            let { media } = this.state;
            if (media.length > 0) {
              // TODO: get current removed media from file
              // eslint-disable-next-line react/destructuring-assignment
              const removedMedia = this.state.media[0];
              media = media.filter((m) => m.id !== removedMedia.id);
              // eslint-disable-next-line react/destructuring-assignment
              this.setState({ media }, () => this.props.onRemove(removedMedia));
            }
          },
        }}
        djsConfig={djsConfig}
      />
    );
  }
}

export default DropUploader;
