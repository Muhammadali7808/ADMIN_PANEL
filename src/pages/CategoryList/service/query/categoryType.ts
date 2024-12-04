export interface categoryType {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      id: number;
      title: string;
      image: string;
      parent?: { id: number; title: string };
    }[];
  };
  
  export interface formDataType {
    title: string;
    image: string;
  }