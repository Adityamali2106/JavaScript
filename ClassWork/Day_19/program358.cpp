using namespace std;
#include<iostream>

inline int Addition(int iNo1, int iNo2)
{
    return iNo1 + iNo2;
}

int main()
{
    int iRet = 0;

    iRet = Addition(10,11);

    cout<<"Addition is : "<<iRet<<endl;

    return 0;
}