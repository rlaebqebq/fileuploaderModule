import styled from "styled-components";
// import ModalComponent from "react-modal";

export const StyledVisualizationItem = styled.div`
    .title {
        position: relative;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
        justify-content: space-between;
        margin-right: 24px;
        .title-wrapper {
            display: flex;
            align-items: center;
            .step {
                margin-right: 8px;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #034ea2;
                border-radius: 50%;

                color: #ffffff;
            }
            .title-content {
                color: #444444;
            }
        }
        .open-modal {
            font-weight: 500;
            font-size: 14px;
            color: #034ea2;

            button {
                background: transparent;
                border: none;
                padding: 0;
                margin: 0;
            }
            .open-modal-button {
                background: #7da3ce;
                border: 0;
                border-radius: 6px;
                padding: 0 10px;
                font-weight: 500;
                font-size: 12px;
                color: #ffffff;
                line-height: 2.2;
            }
            .open-modal-button + .open-modal-button {
                margin-left: 12px;
            }
        }
    }

    .content {
        padding: 14px 15px;
        margin: 8px 24px 20px;
        background: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 4px;

        font-weight: 500;
        font-size: 14px;
        color: #3b3834;
        line-height: 20px;
        position: relative;
    }

    .keyword {
        color: #2674ea;
    }

    .abstract-image-wrapper {
        .abstract-image {
            width: 100%;
        }
    }

    .abstract-image-wrapper:not(:last-of-type) {
        padding-bottom: 30px;
    }

    .abstract-image-wrapper + .abstract-image-wrapper {
        padding-top: 30px;
        border-top: 1px solid #dddddd;
    }

    &.edit {
        .content {
            padding: 14px 15px 10px;
            box-shadow: 0px 0px 6px rgba(125, 163, 206, 0.7);

            & > textarea {
                width: 100%;
                padding: 0;

                font-weight: 500;
                font-size: 14px;
                color: #3b3834;
                line-height: 20px;

                border: initial;
                caret-color: #668bc4;
                &:focus {
                    outline: none;
                }
                resize: none;
            }
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    gap: 30px;
    .flex-item {
        flex: 1;
        & > div {
            width: 100%;
        }

        .label {
            font-weight: 500;
            font-size: 18px;
            color: #000000;
            padding-left: 8px;
            border-left: 5px solid #fda92b;
            margin-bottom: 20px;
        }
    }
    .iframe-wrapper {
        display: flex;
        flex-direction: column;
    }
`;

export const UploadImagesFormLiStyle = styled.p`
    align-self: flex-start;
    background: yellow;
    line-height: 30px;
`;

export const UploadImagesForm = styled.form`
    position: absolute;
    top: 36px;
    right: 0;
    width: calc(100% - 24px);
    z-index: 999;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    .image-body {
        display: flex;
        flex-direction: column;
        padding: 20px 0 20px 20px;
        background: #ffffff;

        .dzu-dropzone {
          padding-right: 20px;

          .dzu-inputLabel, p {
            display: block;
            background: yellow;
            line-height: 50px;
            border: 1px solid red;
            border-radius: 5px;
          }

          .dzu-previewStatusContainer {
            display: flex;
            align-items: center;
          }

          .dzu-inputLabelWithFiles {
            display: flex;
            justify-content: center;

            svg {
              fill: #777777;
            }
          }
        }

        .dzu-submitButtonContainer {
          display: flex;
          background: #f2f2f2;
          border-top: 1px solid #cccccc;
          padding: 10px 20px 20px 10px;
          margin-top: 20px;
          margin: 20px -20px -20px -20px; 

          .dzu-submitButton {
            border: none;
            font-weight: 700;
            font-size: 14px;
            color: #034ea2;
            background: transparent;
            margin-left: auto;
            padding: 9px 25.5px;
          }
        }

        .image-body-info {
            font-weight: 500;
            font-size: 14px;
            color: #222222;
            margin-bottom: 10px;
            padding-right: 20px;
            .dzu-previewContainer {
              padding: 40px 3%;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              position: relative;
              width: 100%;
              min-height: 140px !important;
              z-index: 1;
              border-bottom: 1px solid #ececec;
              box-sizing: border-box;
            }
        }

        .image-body-links {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 0;
            gap: 5px;
            max-height: 335px;
            padding: 0 20px 30px 0;
            overflow: auto;

            li {
                border: 1px solid #cccccc;
                border-radius: 4px;
                padding: 15px 10px;

                display: flex;
                align-items: center;
                gap: 10px;
                justify-content: space-between;
                position: relative;

                .filename-wrapper {
                    span {
                        position: relative;
                        top: -1px;
                    }

                    button {
                        // margin-left: 10px;
                        border: none;
                        background: transparent;

                        img {
                            // margin-left: 5px;
                        }
                    }
                }
                input {
                    flex: 1;
                    outline: none;
                    border: none;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    display: flex;

                    &::-webkit-file-upload-button {
                        // float: right;
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }

        .image-body-plus {
            background: transparent;
            border: none;
            svg path {
                fill: #777777;
            }
        }
    }
    .image-footer {
        display: flex;
        background: #f2f2f2;
        border-top: 1px solid #cccccc;
        padding: 10px 20px 20px;

        #check {
            border: none;
            font-weight: 700;
            font-size: 14px;
            color: #034ea2;
            background: transparent;
            margin-left: auto;
            padding: 9px 25.5px;
        }
    }
`;

export const Convert = styled.div`
    max-width: 570px;
    margin: 60px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .buttons {
        display: flex;
        gap: 50px;
    }
`;

