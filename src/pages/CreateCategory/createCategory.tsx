import { RcFile } from "antd/es/upload"
import { Form, message, Tabs } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateBrand } from "./service/useCreateBrands"
import { FormCategory } from "../../components/Form/form";
export const Create = () => {
  const { mutate,  data: categoryData} = useCreateBrand()
  const [tabs, setTabs] = useState<string>('1')
  const [form] = Form.useForm();
  const navigate = useNavigate();

  console.log('aaaaaaaaaaa',categoryData);
    

  const tab = (key: string) => {
      setTabs(key)
  }

  const submit = (values: { title: string; image: { file: RcFile } }) => {
    const formData = new FormData();
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', values);

    formData.append("title", values.title);

    if (values.image) {
      formData.append("image", values.image.file);
    }

    mutate(formData, {
      onSuccess: () => {
        message.success("Category added successfully!");
        form.resetFields();
        tab('2')      
      },
      onError: (error) => {
        message.error(`Failed to add category: ${error.message}`);
      },
    });
  };

  const SubCategorySubmit = (values: { title: string; image: { file: RcFile }; parent: string }) => {
    const formData = new FormData();
    values.parent = categoryData?.id;
    console.log('parent', values);

    formData.append("title", values.title);
    if (values.image) {
      formData.append("image", values.image.file);
    }
    formData.append("parent", values.parent);

    mutate(formData, {
      onSuccess: () => {
        message.success("Category added successfully!");
        form.resetFields();
        navigate('/app')
      },
      onError: (error) => {
        message.error(`Failed to add category: ${error.message}`);
      },
    });
  };


  return (
    <>
      <Tabs defaultActiveKey="1" activeKey={tabs} items={[
        {
          key: '1',
          label: 'Add Category',
          children: <FormCategory isEdit={false} isLoding={false} onFinish={submit} form={form} />
        },
        {
          key: '2',
          label: 'Sub Category',
          disabled: !categoryData?.id,
          children:  <FormCategory isEdit={false} isLoding={false} onFinish={SubCategorySubmit} form={form} />
        }
      ]}>
      </Tabs>
    </>
  )
}


