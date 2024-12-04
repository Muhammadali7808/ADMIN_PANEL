import { Button, Form, Input, Upload, UploadFile } from "antd"
import { initialValuesType } from "../../pages/EditCategory"
interface formType {
  onFinish?: (values: any) => void,
  isLoding: boolean,
  isEdit: boolean,
  form?: any
  initialValues?: initialValuesType
}

export const FormCategory = ({ onFinish, form, isLoding,initialValues, isEdit }: formType) => {

  const defaultFileList: UploadFile[] = [
    {
      uid: "-1",
      name: `${initialValues?.title}`,
      status: "done",
      url: `${initialValues?.image}`,
    },
  ];

  if(initialValues &&initialValues?.title == undefined) return <div>Loading...</div>

  return (
    <div>
      {isLoding ? (
        <h1>Loding.....</h1>
      ) : (
        <Form
          initialValues={{title: initialValues?.title}}
          layout="vertical"
          form={form}
          onFinish={onFinish}
          style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input placeholder="Enter category title" />
          </Form.Item>

          <Form.Item
            label="Image"
            name="image"
            valuePropName="file"
          >
            <Upload
              beforeUpload={() => false}
              accept="image"
              maxCount={1}
              listType="picture"
              defaultFileList={isEdit ? defaultFileList : []}
            >
              <Button>Upload Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Add Category
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  )
}
