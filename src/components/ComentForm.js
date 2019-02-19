import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Input } from "antd";

const TextArea = Input.TextArea;

const propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
};

const CommentForm = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button
                htmlType="submit"
                loading={submitting}
                onClick={onSubmit}
                type="primary"
            >
        Add Comment
            </Button>
        </Form.Item>
    </div>
);

CommentForm.propTypes = propTypes;

export default CommentForm;
